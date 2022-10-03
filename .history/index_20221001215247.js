
var canvas = d3.select('#canvas');

d3.json("/location.json").then((data) => {


     console.log(data);

     var countryData = data;

console.log(countryData);

var myMap = L.map("canvas",{
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);





});


