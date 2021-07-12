// Create the tile layer that will be the background of our map
var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "light-v10",
  accessToken: API_KEY
});

var map = L.map("map-id", {
  center: [40.73, -74.0059],
  zoom: 12,
  
});

// Add our 'lightmap' tile layer to the map
lightmap.addTo(map);

d3.csv("cities.csv").then(function(cities) {
  var name = cities.name;
  var lat = cities.latitude;
  var lon = cities.longitude;
  console.log(name);

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
  for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(lat, lon)
      .bindPopup("<h1>" + name + "</h1> <hr> <h3>holder " + lon + "</h3>")
      .addTo(myMap);

  }
    


});