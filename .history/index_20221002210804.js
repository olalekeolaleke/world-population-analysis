
/// Create a map object.
var myMap = L.map("map", {
    center: [9.08, 8.67],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  // An array containing each city's name, location, and population
  d3.json("/static/world_population.json").then((data) => {
    var countries = data;

    console.log(countries);

    // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (var i = 0; i < countries.length; i++) {
    // var country = countries[i];

    L.marker(countries.location)
      .bindPopup(`<h1>${countries.id}</h1> <hr> <h3>Population ${countries.pop2022.toLocaleString()}</h3>`)
      .addTo(myMap);
  }
  });
  
  
  
 