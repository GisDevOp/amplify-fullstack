import React, { useEffect } from 'react';
import WebMap from '@arcgis/core/WebMap.js';
import MapView from '@arcgis/core/views/MapView.js';
import './style.css';

const ArcGISMap = () => {
  useEffect(() => {
    // Create a new WebMap instance
    const webmap = new WebMap({
      portalItem: {
        id: 'f2e9b762544945f390ca4ac3671cfa72',
      },
    });

    // Set the WebMap instance to the map property in a MapView
    const view = new MapView({
      map: webmap,
      container: 'viewDiv',
    });

    return () => {
      // Clean up when the component unmounts
      if (view) {
        view.container = null;
      }
    };
  }, []);

  return <div id="viewDiv" style={{ width: '100%', height: '500px' }}></div>;
};

export default ArcGISMap;
