var map = L.map("map", {
  center: [40.7128, -74.0059],
  zoom: 10
});

var loc = window.location.pathname;
console.log(loc);

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(map);

function fetchJSON(url) {
  return fetch(url)
    .then(function(response) {
      return response.json();
    });
}

// loading GeoJSON file - Here my html and usa_adm.geojson file resides in same folder
// d3.json("output/airbnb2016.geojson",function(data) {
//     // L.geoJson function is used to parse geojson file and load on to map
//     L.geoJson(data).addTo(map);
//     });

var data = fetchJSON('output/airbnb2016data.geojson')
    .then(function(data) { return data })

// If data.beta.nyc is down comment out this link
// var link = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
// "35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";

// Uncomment this link local geojson for when data.beta.nyc is down
// var link = "/output/airbnb2016.geojson";

// Grabbing our GeoJSON data..
// d3.json(link, function(data) {
//   // Creating a GeoJSON layer with the retrieved data
//   L.geoJson(data).addTo(map);
// }
