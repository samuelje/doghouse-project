var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

// Initialize all of the LayerGroups we'll be using
var layers = {
  //adoptable_dogs: new L.LayerGroup(),
  Small_dogs: new L.LayerGroup(),
  Medium_dogs: new L.LayerGroup(),
  large_dogs: new L.LayerGroup(),
  XL_dogs: new L.LayerGroup()
};

// Create the map with our layers
var map = L.map("map-id", {
  center: [37.0902, -95.7129],
  zoom: 5,
  layers: [
    //layers.adoptable_dogs,
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
  //"All adoptable dogs": //layers.adoptable_dogs,
  "They're called dogs but are they really dogs?": layers.Small_dogs,
  "Medium dogs": layers.Medium_dogs,
  "Large Dogs": layers.large_dogs,
  "Dogs that are too big to handle": layers.XL_dogs
};

// Create a control for our layers, add our overlay layers to it
L.control.layers(null, overlays, {
  collapsed: false
}).addTo(map);

// Create a legend to display information about our map
//var info = L.control({
  //position: "bottomright"
//});

// When the layer control is added, insert a div with the class of "legend"
//info.onAdd = function() {
  //var div = L.DomUtil.create("div", "legend");
  //return div;
//};
// Add the info legend to the map
//info.addTo(map);

// Initialize an object containing icons for each layer group
var icons = {
  adoptable_dogs: L.ExtraMarkers.icon({
    icon: "ion-ios-paw",
    iconColor: "white",
    markerColor: "green",
    shape: "penta"
  }),
  Small_dogs: L.ExtraMarkers.icon({
    icon: "ion-ios-paw",
    iconColor: "white",
    markerColor: "yellow",
    shape: "penta"
  }),
  Medium_dogs: L.ExtraMarkers.icon({
    icon: "ion-ios-paw",
    iconColor: "white",
    markerColor: "blue-dark",
    shape: "penta"
  }),
  large_dogs: L.ExtraMarkers.icon({
    icon: "ion-ios-paw",
    iconColor: "white",
    markerColor: "orange",
    shape: "penta"
  }),
  XL_dogs: L.ExtraMarkers.icon({
    icon: "ion-ios-paw",
    iconColor: "white",
    markerColor: "blue",
    shape: "penta"
  })
};


  // geojson
    var dogLocation = geojson.features;

    // Initialize a dog sizes, which will be used as a key to access the appropriate layers, icons
    var dogSizes;

    // Loop through the stations (they're the same size and have partially matching data)
    for (var i = 0; i < dogLocation.length; i++) {

      // Create a new station object with properties of both station objects
      var dog = Object.assign({}, dogLocation[i]);
      // If dog size 3 = XL large
      if (dog.properties.size === 3) {
        dogSizes = "XL_dogs";
      }
      // If dog size is 2 = large dog
      else if (dog.properties.size === 2) {
        dogSizes = "large_dogs";
      }
      // If dog size is 1 = to small dog
      else if (dog.properties.size === 1) {
        dogSizes = "Small_dogs";
      }
      // If dog size is 0 = to Medium dogs
      else if (dog.properties.size === 0) {
        dogSizes = "Medium_dogs";
      }
      // // Otherwise adoptable dogs
      // if (dog.properties.size >= 0) {
      //   dogSizes = "adoptable_dogs";
      // }

      //console.log(dogSizes);

      // Create a new marker with the appropriate icon and coordinates
      var newMarker = L.marker([dog.properties.Latitude, dog.properties.Longitude], {
        icon: icons[dogSizes]
      });

      // Add the new marker to the appropriate layer
      newMarker.addTo(layers[dogSizes]);

      // Bind a popup to the marker that will  display on click. This will be rendered as HTML
      newMarker.bindPopup("<img src=" + dog.properties.primary_photo_cropped_full + "/>" + "<br>" + "size: " + dog.properties.size + "<br>" + "Name: " + dog.properties.name + "<br>" + "Breed: " + dog.properties.breeds_primary + "<br>" + "Age: " + dog.properties.age + "<br>" + "Website: " + "<a href=" + dog.properties.url + ">" + "website link");
    }