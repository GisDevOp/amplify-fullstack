
import '@esri/calcite-components/dist/calcite/calcite.css';
import "@esri/calcite-components/dist/components/calcite-loader.js";
import "@esri/calcite-components/dist/components/calcite-shell.js";
import "@esri/calcite-components/dist/components/calcite-shell-panel.js";
import "@esri/calcite-components/dist/components/calcite-action-bar.js";
import "@esri/calcite-components/dist/components/calcite-action.js";
import "@esri/calcite-components/dist/components/calcite-panel.js";
import "@esri/calcite-components/dist/components/calcite-loader.js";
import "@esri/calcite-components/dist/components/";

  import '@esri/calcite-components/dist/calcite/calcite.css';
  
  function CalComp() {
    
  
    return (
      <>
       <div id="calcite" >
        <calcite-loader active></calcite-loader>
        <calcite-shell content-behind >
          
    
          <calcite-shell-panel slot="primary-panel" detached>
            <calcite-action-bar slot="action-bar" >
              <calcite-action data-action-id="layers" icon="layers" text="Layers"></calcite-action>
              <calcite-action data-action-id="basemaps" icon="basemap" text="Basemaps"></calcite-action>
              <calcite-action data-action-id="legend" icon="legend" text="Legend"></calcite-action>
              <calcite-action data-action-id="bookmarks" icon="bookmark" text="Bookmarks"></calcite-action> 
              <calcite-action data-action-id="print" icon="print" text="Print"></calcite-action>
              <calcite-action data-action-id="information" icon="information" text="Information"></calcite-action>
            </calcite-action-bar>
    
            {/* <!-- Map-specific panels (each one provides a div for a ArcGIS JavaScript API widget) --> */}
            <calcite-panel heading="Layers" height-scale="l" data-panel-id="layers" hidden>
              <div id="layers-container"></div>
            </calcite-panel>
            <calcite-panel heading="Basemaps" height-scale="l" data-panel-id="basemaps" hidden>
              <div id="basemaps-container"></div>
            </calcite-panel>
            <calcite-panel heading="Legend" height-scale="l" data-panel-id="legend" hidden>
              <div id="legend-container"></div>
            </calcite-panel>
            <calcite-panel heading="Bookmarks" height-scale="l" data-panel-id="bookmarks" hidden>
              <div id="bookmarks-container"></div>
            </calcite-panel>
            <calcite-panel heading="Print" height-scale="l" data-panel-id="print" hidden>
              <div id="print-container"></div>
            </calcite-panel>
    
            {/* <!-- Info panel (populates with info from the web map) --> */}
            <calcite-panel heading="Details" data-panel-id="information" hidden>
              <div id="info-content">
                <img id="item-thumbnail" alt="webmap thumbnail" />
                <div id="item-description">
                  {/* <!-- Dynamically populated --> */}
                </div>
                <calcite-label layout="inline">
                  <b>Rating:</b>
                  <calcite-rating id="item-rating" read-only>
                    {/* <!-- Dynamically populated --> */}
                  </calcite-rating>
                </calcite-label>
              </div>
            </calcite-panel>
          </calcite-shell-panel>
        </calcite-shell>
          </div>
      </>
    );
  }
  
  export default CalComp;