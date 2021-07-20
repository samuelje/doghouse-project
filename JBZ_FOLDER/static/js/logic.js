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
    "Adoptable Doggos": adoptableDoggos,
  };


  // Create the map object with options
  var map = L.map("map-id", {
    center: [39.7392, -104.9903],
    zoom: 9,
    layers: [lightmap, adoptableDoggos]
  });

  L.control.layers(baseMaps, overlayMaps, {
    collapsed: false
  }).addTo(map);
}
  

function createMarkers() {
var locs = geojson.features 
  // Initialize an array to hold bike markers
  var doggos = [];
  var smol = [];

  // Loop through the stations array
  for (var index = 0; index < locs.length; index++) {
    var coords = locs[index];
    // For each station, create a marker and bind a popup with the station's name
    var doggoMarker = L.geoJSON(coords.geometry)
      .bindPopup("<h3>" + coords.properties.name + "<h4>"+coords.properties.breeds_primary +"<h4>"+coords.properties.url)
    doggos.push(doggoMarker);
    if (coords.size === 1){
      var smolDoggos = L.geoJSON(coord.geometry)
    }
  }
  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(L.layerGroup(doggos));
}
createMarkers();

