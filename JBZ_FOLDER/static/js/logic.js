function createMap(adoptableDoggos) {
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var baseMaps = {
    "Light Map": lightmap
  };

  var overlayMaps = {
    "Adoptable Doggos": adoptableDoggos
  };


  // Create the map object with options
  var map = L.map("map-id", {
    center: [39.7392, -104.9903],
    zoom: 12,
    layers: lightmap
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}
  L.geoJSON(geojson).bindPopup(function (layer) {
    return layer.feature.properties.name;
}).addTo(map);
createMarkers();

  