import React, { useEffect, useRef } from 'react';
import CreateFeaturesWorkflow from "@arcgis/core/widgets/Editor/CreateFeaturesWorkflow.js";
const MapComponent = () => {
  const mapDivRef = useRef(null);

  useEffect(() => {
    // Load the ArcGIS API for JavaScript
    const loadScript = document.createElement('script');
    loadScript.src = 'https://js.arcgis.com/4.28/';
    loadScript.async = true;
    document.body.appendChild(loadScript);

    loadScript.addEventListener('load', () => {
      // After the API is loaded, create the map
      loadArcGISMap();
    });

    return () => {
      // Clean up the script tag
      document.body.removeChild(loadScript);
    };
  }, []);

  const loadArcGISMap = () => {
    // Ensure the ArcGIS API for JavaScript is available
    if (window.require) {
      window.require([
        'esri/WebMap',
        'esri/views/MapView',
        'esri/widgets/Editor'
      ], (
        WebMap,
        MapView,
        Editor
      ) => {
        // Create a map from the referenced webmap item id
        const webmap = new WebMap({
          portalItem: {
            id: '4793230052ed498ebf1c7bed9966bd35'
          }
        });

        const view = new MapView({
          container: mapDivRef.current,
          map: webmap
        });

        view.when(() => {
            const editor = new Editor({
                view: view,
                layerInfos: [{
                  layer: webmap, // pass in the feature layer,
                  enabled: true, // Default is true, set to false to disable editing functionality.
                  addEnabled: true, // Default is true, set to false to disable the ability to add a new feature.
                  updateEnabled: false // Default is true, set to false to disable the ability to edit an existing feature.
                              }]
              });
          // Add the widget to the view
          view.ui.add(editor, 'top-right');
        });
      });
    }
  };

  return (
    <div>
      <div ref={mapDivRef} style={{ height: '100vh', width: '100vw' }}></div>
    </div>
  );
};

export default MapComponent;
