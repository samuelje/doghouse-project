var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });

  // Create a baseMaps object to hold the lightmap layer
  var layers = {
    doggos: new L.LayerGroup()

  };

  // Create the map object with options
  var map = L.map("map-id", {
    center: [39.7392, -104.9903],
    zoom: 12,
    layers: [layers.doggos]
  });

  lightmap.addTo(map);

  var overlays = {
    "Test": layers.doggos

  };

L.control.layers(null, overlays).addTo(map);

var icons = {
  doggos: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  })

var locs = geojson.features 
  // Initialize an array to hold bike markers
  var doggos = [];

  // Loop through the stations array
  for (var index = 0; index < locs.length; index++) {
    var coords = locs[index];
    // For each station, create a marker and bind a popup with the station's name
    var doggoMarker = L.marker([coords.properties.Latitude, coords.properties.Longitude] )
      .bindPopup("<h3>" + coords.properties.name + "<h4> Breed: "+coords.properties.breeds_primary +"<h4>"+coords.properties.url );

    // Add the marker to the bikeMarkers array 
    doggos.push(doggoMarker);
  }

  // Create a layer group made from the bike markers array, pass it into the createMap function
  createMap(doggos);
}

var icon = {
  doggos: L.ExtraMarker.icon ({
    icon: "ion-md-paw",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  })}

createMarkers();
  

