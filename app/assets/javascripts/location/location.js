$(document).ready(function () {

  const loadMap = function () {
    const BASEMAP = 'http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png';

    // create a map in the "map" div, set the view to a given place and zoom
    var map = L.map('map').setView([39.950490, -98.746077], 5);

    // add an OpenStreetMap tile layer
    L.tileLayer(BASEMAP, {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    map.scrollWheelZoom.disable();

    var drawnItems = new L.FeatureGroup();
    map.addLayer(drawnItems);

    // Create two sets of controls to prevent multiple polygons
    var drawControlFull = new L.Control.Draw({
      position: 'topright',
      draw: {
        polygon: {
          shapeOptions: {
            color: 'purple'
          },
          allowIntersection: false,
          drawError: {
            color: 'orange',
            timeout: 1000
          },
          showArea: true,
          metric: false,
          repeatMode: false
        },
        polyline: false,
        rect: false,
        circle: false,
        marker: false,
      },
      edit: {
        featureGroup: drawnItems
      }
    });

    var drawControlEditOnly = new L.Control.Draw({
      position: 'topright',
      draw: false,
      edit: {
        featureGroup: drawnItems
      }
    });

    // Load GeoJSON from form if exists and set controls
    const init_location = $('#location_map').val();

    if ( init_location.length > 0 ) {
      const geoJsonLayer = L.geoJson(JSON.parse(init_location));
      map.setView(geoJsonLayer.getBounds().getCenter());
      map.fitBounds(geoJsonLayer.getBounds());
      geoJsonLayer.eachLayer(
        function(layer){
          drawnItems.addLayer(layer);
      });
      map.addControl(drawControlEditOnly);
    } else {
      map.addControl(drawControlFull);
    }

    // On initial draw save to form
    map.on('draw:created', function (e) {
    const type = e.layerType,
      layer = e.layer;

      drawControlFull.removeFrom(map);
      drawControlEditOnly.addTo(map)

      const shape = layer.toGeoJSON()
      $('#location_map').val(JSON.stringify(shape));

      drawnItems.addLayer(layer);
    });

    // On Editing Completion update layer and form
    map.on('draw:edited', function (e) {
      var layers = e.layers;

      layers.eachLayer(function (layer) {
        const shape = layer.toGeoJSON()
        $('#location_map').val(JSON.stringify(shape));
      });
    });

    // On delete polygon, reset draw controls and clear form
    map.on("draw:deleted", function(e) {
      if (drawnItems.getLayers().length === 0){
        drawControlEditOnly.removeFrom(map);
        drawControlFull.addTo(map);
        $('#location_map').val('');
      };
    });

  };

  if ($('#map').length) {
    loadMap();
  }

  $(function(){
    $(".chzn-select").chosen();
  });

  $(document).ready(function(){
    $('.datepicker').datepicker({
      format: 'yyyy-mm-dd',
    });
  });
});
