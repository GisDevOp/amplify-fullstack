import React, { useRef, useEffect, useState } from "react";
import Bookmarks from '@arcgis/core/widgets/Bookmarks';
import Expand from '@arcgis/core/widgets/Expand';
import MapView from "@arcgis/core/views/MapView";
import Extent from "@arcgis/core/geometry/Extent";
import WebMap from "@arcgis/core/WebMap";
import BasemapGallery from   "@arcgis/core/widgets/BasemapGallery";
import LayerList from "@arcgis/core/widgets/LayerList";
import Legend from   "@arcgis/core/widgets/Legend";
import Print from "@arcgis/core/widgets/Print";

import DistanceMeasurement2D from  "@arcgis/core/widgets/DistanceMeasurement2D";
import AreaMeasurement2D from  "@arcgis/core/widgets/AreaMeasurement2D";
import Editor from "@arcgis/core/widgets/Editor";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Sketch from "@arcgis/core/widgets/Sketch.js";
// add the toolbar for the measurement widgets
import Home from  '@arcgis/core/widgets/Home';
import ScaleBar from '@arcgis/core/widgets/ScaleBar';
import Compass from "@arcgis/core/widgets/Compass";
import Search from "@arcgis/core/widgets/Search";
import Weather from "@arcgis/core/widgets/Weather";             
import Popup from "@arcgis/core/widgets/Popup.js";
//import ".././App.css";

function Map() {
    let activeWidget = null;
    const effectRun =  useRef(false);
    const [view ,setView] = useState(null);
  const mapDiv = useRef(null);
  
  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
       const webmapId="30c90be0a21e49c893826216abe3cc30"; //2468ad809fbf4e49a3585d553a5ed8e3    // YUP-30c90be0a21e49c893826216abe3cc30  /// BAC_HW- a8bae211bf2c482ebf0817dc3df20d96
      const webmap = new WebMap({
        portalItem: {
          id: webmapId
        }
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap,
        //center: [153, -27], // Sets the center point of the view at a specified lon/lat
  zoom: 3 
      });
      const graphicsLayer = new GraphicsLayer({ title: "graphicsLayer" });
      webmap.add(graphicsLayer)
//view

const sketch = new Sketch({
  layer: graphicsLayer,
  view: view,
   polygonSymbol: {
    type: "simple-fill",
    style: "cross",
    color: "#d5f122",
    outline: {
      width: 3,
      style: "solid",
      color: "#d5f122"
    }
  },
  // graphic will be selected as soon as it is created
  creationMode: "update",
  snappingOptions: {
    // autocasts as SnappingOptions()
    enabled: true,
    // enable snapping on the graphicslayer by default
    featureSources: [{ layer: graphicsLayer, enabled: true }]
  },
  visibleElements: {
    // hide/show sketch elements
    createTools: {
      circle: false // hide the circle tool
    },
    selectionTools: {
      "lasso-selection": false // hide the lasso-selection tool
    }
  }
});
   // add the UI components to the view
   view.ui.add(sketch, "top-right");
// Sets the center point of the view at a specified lon/lat
//view.center = [153.73, -25.20];
view.zoom = 15;  // Sets the zoom LOD to 13

//new extent for the mapview where the spatialReference.wkid is 4326
// const extent = new Extent({

// xmax : 154.10024342006618,
// xmin : 151.53293873255906,
// ymax :  -24.333953401838514,
// ymin : -26.891864276329802,
//   spatialReference: {
//     wkid: 4326
//   }
// });


// view.extent = extent;

view.constraints = {
//   geometry: { // Constrain lateral movement to Lower Manhattan
//     type: "extent",
//     xmax : 154.1024342006618,
// xmin : 152.13293873255906,
// ymax :  -24.173953401838514,
// ymin : -26.251864276329802
//   },
  minScale: 1750000, // User cannot zoom out beyond a scale of 1:500,000
  maxScale: 0, // User can overzoom tiles
  rotationEnabled: false // Disables map rotation
};


        const bookmarks = new Bookmarks({
        view,
        container: "bookmarks-container"
      });

      const bkExpand = new Expand({
        view,
        content: bookmarks,
        expanded: true
      });
      const basemaps = new BasemapGallery({
        view,
        container: "basemaps-container"
      });
      
      const editor = new Editor({
        view: view,
        layerInfos: [webmap]
    });
   

    const EdtExpand = new Expand({
      view,
      content: editor,
      expanded: true
    });

      const layerList = new LayerList({
        view,
        selectionEnabled: true,
        container: "layers-container"
      });

      const legend = new Legend({
        view,
        container: "legend-container"
      });
      const print = new Print({
        view,
        container: "print-container"
      });
      // view.when(() => {
        

      //   // Add widget to the top right corner of the view
      //   view.ui.add(print, "top-right");
      // });

      // Add the widget to the top-right corner of the view
      // view.ui.add(bkExpand, "top-right");
       view.ui.add(EdtExpand, "bottom-right");
//console.log(webmap.portalItem);
view.ui.add("topbar", "top-right");

view.ui.add(
    new Home({
        view: view,
    }),
    'top-left'
   );

   view.ui.add(
    new ScaleBar({
        view: view,
    }),
    'bottom-left'
   );

   view.ui.add(
    new Compass({
        view: view,
    }),
    'top-right'
   );

   view.ui.add(
    new Search({
        view: view,
    }),
    'top-right'
   );

  //  view.ui.add(
  //   new Weather({
  //       view: view,
  //   }),
  //   'top-right'
  //  );
  


document.getElementById("distanceButton").addEventListener("click", function() {
  setActiveWidget(null);
  if (!this.classList.contains("active")) {
    setActiveWidget("distance");
  } else {
    setActiveButton(null);
  }
});

document.getElementById("areaButton").addEventListener("click", function() {
  setActiveWidget(null);
  if (!this.classList.contains("active")) {
    setActiveWidget("area");
  } else {
    setActiveButton(null);
  }
});

function setActiveWidget(type) {
  switch (type) {
    case "distance":
      activeWidget = new DistanceMeasurement2D({
        view: view
      });

      // skip the initial 'new measurement' button
      activeWidget.viewModel.start();

      view.ui.add(activeWidget, "top-right");
      setActiveButton(document.getElementById("distanceButton"));
      break;
    case "area":
      activeWidget = new AreaMeasurement2D({
        view: view
      });

      // skip the initial 'new measurement' button
      activeWidget.viewModel.start();

      view.ui.add(activeWidget, "top-right");
      setActiveButton(document.getElementById("areaButton"));
      break;
    case null:
      if (activeWidget) {
        view.ui.remove(activeWidget);
        activeWidget.destroy();
        activeWidget = null;
      }
      break;
  }
}

function setActiveButton(selectedButton) {
  // focus the view to activate keyboard shortcuts for sketching
  view.focus();
  let elements = document.getElementsByClassName("active");
  for (let i = 0; i < elements.length; i++) {
    elements[i].classList.remove("active");
  }
  if (selectedButton) {
    selectedButton.classList.add("active");
  }
} 


      // bonus - how many bookmarks in the webmap?
      webmap.when(() => {
       
        const { title, description, thumbnailUrl, avgRating } = webmap.portalItem;
        // document.querySelector("#header-title").textContent = title;
        document.querySelector("#item-description").innerHTML = description;
        document.querySelector("#item-thumbnail").src = thumbnailUrl;
        document.querySelector("#item-rating").value = avgRating;

        let activeWidget;

        const handleActionBarClick = ({ target }) => {
          if (target.tagName !== "CALCITE-ACTION") {
            return;
          }

          if (activeWidget) {
            document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
            document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
          }

          const nextWidget = target.dataset.actionId;
          if (nextWidget !== activeWidget) {
            document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
            document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
            activeWidget = nextWidget;
          } else {
            activeWidget = null;
          }
        };

        document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);

        let actionBarExpanded = false;

        document.addEventListener("calciteActionBarToggle", event => {
          actionBarExpanded = !actionBarExpanded;
          view.padding = {
            left: actionBarExpanded ? 135 : 45
          };
        });

        document.querySelector("calcite-shell").hidden = false;
        document.querySelector("calcite-loader").active = false;

      });
    }
  }, []);

  return <><div className="mapDiv" ref={mapDiv} style={{height:'90vh' ,width:'auto',paddingLeft:'15px', paddingRight:'.2px', paddingBottom:'5px', marginTop:'25px', marginLeft:'25px', marginBottom:'5px'}}></div>  <div id="topbar">
  <button
    className="action-button esri-icon-measure-line"
    id="distanceButton"
    type="button"
    title="Measure distance between two or more points"
  ></button>
  <button className="action-button esri-icon-measure-area" id="areaButton" type="button" title="Measure area"></button> 
</div></>;
}

export default Map;