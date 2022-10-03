
// var canvas = d3.select('#canvas');

var myMap = L.map("map",{
    center: [37.09, -95.71],
    zoom: 5
});

// Add a tile layer.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Country data
var countries : [
     {
       name: "China",
       Location: [35.86166, 104.195397],
       Population: 1,425,887,337
     },
     {
       name: "India",
       Location: [20.593684, 78.96288],
       Population: 1,417,173,173
     },
     {
       name: "United States",
       Location: [37.09024, -95.712891],
       Population: 338,289,857
     },
     {
       name: "Indonesia",
       Location: [-0.789275, 113.921327],
       Population: 275,501,339
     },
     {
       name: "Pakistan",
       Location: [30.375321, 69.345116],
       Population: 235,824,862
     },
     {
       name: "Nigeria",
       Location: [9.081999, 8.675277],
       Population: 218,541,212
     },
     {
       name: "Brazil",
       Location: [-14.235004, -51.92528],
       Population: 215,313,498
     },
     {
       name: "Bangladesh",
       Location: [23.684994, 90.356331],
       Population: 171,186,372
     }
    ]

// // Define a markerSize() function that will give each city a different radius based on its population.
// function markerSize(population) {
//   return Math.sqrt(population) * 50;
// }


// d3.json("/location.json").then((data) => {


//      console.log(data);

//      var countryData = data;

// console.log(countryData);

for (var i = 0; i < countryData.lenght; i++) {
    var country = countryData[i];

    L.circle(countryData[i].location, {
        fillOpacitiy:0.75,
        color: "white",
        fillColor: "purple",

        radius: markerSize(countryData[i].population)
    }).bindPopup(`<h1>${countryData[i].name}</h1> <hr> <h3> 2022 Population:${countryData[i].population.toLocaleString()}
    </h3>`).addTo(myMap);
}
// console.log(location);

// });








