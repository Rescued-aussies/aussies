'use strict';

/*-------------------------------------------------------------------------------
  Map Initialization
-------------------------------------------------------------------------------*/
mapboxgl.accessToken = 'pk.eyJ1IjoiYWJlZHNoIiwiYSI6ImNrNnRyZ3d4aDAyMzkzZXBoc3RsYnM0aGwifQ.yhr3W_OOI6xXElmSY8cyPg'; // <---- YOUR MAPBOX API KEY GOES HERE
var map = new mapboxgl.Map({
  style: 'mapbox://styles/mapbox/light-v10',
  center: [-77.04, 38.907],
  zoom: 11.5,
  container: 'map',
  antialias: true
});

/*-------------------------------------------------------------------------------
  The Draggable Marker
-------------------------------------------------------------------------------*/
var marker = new mapboxgl.Marker({
    draggable: true
  })
  .setLngLat([-77.04, 38.907])
  .addTo(map);
