
// var canvas = d3.select('#canvas');

var myMap = L.map("map",{
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define a markerSize() function that will give each city a different radius based on its population.
function markerSize(population) {
  return Math.sqrt(population) * 50;
}


d3.json("/location.json").then((data) => {


     console.log(data);

     var countryData = data;

console.log(countryData);

for (var i = 0; i < countryData.lenght; i++) {
    var country = countryData
    L.circle(countryData[i].location, {
        fillOpacitiy:0.75,
        color: "white",
        fillColor: "purple",

        radius: markerSize(countryData[i].population)
    }).bindPopup(`<h1>${countryData[i].name}</h1> <hr> <h3> 2022 Population:${countryData[i].population.toLocaleString()}
    </h3>`).addTo(myMap);
}
console.log(location);

});








