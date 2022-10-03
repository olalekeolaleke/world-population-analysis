
// var canvas = d3.select('#canvas');

var myMap = L.map("canvas",{
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);



d3.json("/location.json").then((data) => {


     console.log(data);

     var countryData = data;

console.log(countryData);
});



// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(population) {
  return Math.sqrt(population) * 50;
}

for (var i =){
    
}





