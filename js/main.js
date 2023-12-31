require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",
    "esri/widgets/Home",
    "esri/widgets/Fullscreen"
], function(esriConfig, Map, MapView, Home, Fullscreen){
    esriConfig.apiKey="AAPK83d59a6fd1644b47994d6784e1f71412rkD_5GJt5fE6JE-RFucYTSE8RJu3XdC3bJg0E-pz6vI8uqL8eus7IF4aMk6tvCBP"

    const map = new Map({
        basemap:"arcgis-streets"
    });

    const view = new MapView({
        map: map,
        // logitude,latitude for Ottawa
        center: [-75.6972, 45.4215],
        zoom: 13,
        container: "viewDiv",
        constraints: {
          snapToZoom: false,
          minScale: 72223.819286
        },
        resizeAlign: "top-left"
    });

    // view.ui.add(
    //     new Home({
    //       view: view
    //     }),
    //     "top-left"
    //   );

      view.ui.add(
        new Fullscreen({
          view: view,
        }),
        "top-right"
      );

    
}
)