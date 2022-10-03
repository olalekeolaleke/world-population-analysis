
var canvas = d3.select('#canvas');

d3.json("/location.json").then((data) => {


     console.log(data);

     var countryData = data;

console.log(countryData);

var myMap = L.map("canvas",{
    center: [37.09, -95.71],
    zoom
})






});


