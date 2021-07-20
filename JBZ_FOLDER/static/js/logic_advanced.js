var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  adoptable_dogs: new L.LayerGroup(),
  Small_dogs: new L.LayerGroup(),
  Medium_dogs: new L.LayerGroup(),
  large_dogs: new L.LayerGroup(),
  XL_dogs: new L.LayerGroup()
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [37.09, -95.71],
  zoom: 5,
  layers: [
    layers.adoptable_dogs,
    layers.Small_dogs,
    layers.Medium_dogs,
    layers.large_dogs,
    layers.XL_dogs
  ]
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

// Create an overlays object to add to the layer control
var overlays = {
  "All adoptable dogs": layers.adoptable_dogs,
  "They're called dogs but are they really dogs?": layers.Small_dogs,
  "Medium dogs": layers.Medium_dogs,
  "Large Dogs": layers.large_dogs,
  "Dogs that are too big to handle": layers.XL_dogs
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays).addTo(map);

// Create a legend to display information about our map
var info = L.control({
  position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend"
info.onAdd = function() {
  var div = L.DomUtil.create("div", "legend");
  return div;
};
// Add the info legend to the map
info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  adoptable_dogs: L.ExtraMarkers.icon({
    icon: "ion-settings",
    iconColor: "white",
    markerColor: "yellow",
    shape: "star"
  }),
  Small_dogs: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "red",
    shape: "circle"
  }),
  Medium_dogs: L.ExtraMarkers.icon({
    icon: "ion-minus-circled",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  large_dogs: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "orange",
    shape: "circle"
  }),
  XL_dogs: L.ExtraMarkers.icon({
    icon: "ion-android-bicycle",
    iconColor: "white",
    markerColor: "green",
    shape: "circle"
  })
};


  // When the first API call is complete, perform another call to the Citi Bike Station Status endpoint
    var dogLocation = geojson.features;

    // Initialize a stationStatusCode, which will be used as a key to access the appropriate layers, icons, and station count for layer group
    var dogSizes;

    // Loop through the stations (they're the same size and have partially matching data)
    for (var i = 0; i < dogLocation.length; i++) {

      // Create a new station object with properties of both station objects
      var dog = Object.assign({}, dogLocation[i]);
      // If a station is listed but not installed, it's coming soon
      if (dog.name) {
        dogSizes = "adoptable_dogs";
      }
      // If a station has no bikes available, it's empty
      else if (dog.size === 1) {
        dogSizes = "Small_dogs";
      }
      // If a station is installed but isn't renting, it's out of order
      else if (dog.size === 0) {
        dogSizes = "Medium_dogs";
      }
      // If a station has less than 5 bikes, it's status is low
      else if (dog.size === 2) {
        dogSizes = "Large_dogs";
      }
      // Otherwise the station is normal
      else {
        dogSizes = "XL_dogs";
      }

      // Create a new marker with the appropriate icon and coordinates
      var newMarker = L.geoJson(dog.geometry, {
        icon: icons[dogSizes]
      });

      // Add the new marker to the appropriate layer
      newMarker.addTo(layers[dogSizes]);

      // Bind a popup to the marker that will  display on click. This will be rendered as HTML
      newMarker.bindPopup(dog.properties.name + "<br> Capacity: " + dog.properties.url + "<br>" + dog.properties.breeds_primary + " Bikes Available");
    }

