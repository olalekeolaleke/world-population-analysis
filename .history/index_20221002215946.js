
/// Create a map object.
var myMap = L.map("map", {
    center: [9.08, 8.67],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  var countries = [
    {
      name: "China",
      pop2022: 1425887.337,
      pop2021: 1425893.465,
      Location: [35.86166, 104.195397]
    },
    {
      name: "India",
      pop2022: 1417173.173,
      pop2021: 1407563.842,
      Location: [20.593684, 78.96288]
    },
    {
      name: "United States",
      pop2022: 338289.857,
      pop2021: 336997.624,
      Location: [37.09024, -95.712891]
    },
    {
      name: "Indonesia",
      pop2022: 275501.339,
      pop2021: 273753.191,
      Location: [-0.789275, 113.921327]
    },
    {
      name: "Pakistan",
      pop2022: 235824.862,
      pop2021: 231402.117,
      Location: [30.375321, 69.345116]
    },
    {
      name: "Nigeria",
      pop2022: 218541.212,
      pop2021: 213401.323,
      Location: [9.081999, 8.675277]
    },
    {
      name: "Brazil",
      pop2022: 215313.498,
      pop2021: 214326.223,
      Location: [-14.235004, -51.92528]
    },
    {
      name: "Bangladesh",
      pop2022: 171186.372,
      pop2021: 169356.251,
      Location: [23.684994, 90.356331]
    },
    {
      name: "Russia",
      pop2022: 144713.314,
      pop2021: 145102.755,
      Location: [61.52401, 105.318756]
    },
    {
      name: "Mexico",
      pop2022: 127504.125,
      pop2021: 126705.138,
      Location: [23.634501, -102.55278]
    },
    {
      name: "Japan",
      pop2022: 123951.692,
      pop2021: 124612.53,
      Location: [36.204824, 138.252924]
    },
    {
      name: "Ethiopia",
      pop2022: 123379.924,
      pop2021: 120283.026,
      Location: [9.145, 40.489673]
    },
    {
      name: "Philippines",
      pop2022: 115559.009,
      pop2021: 113880.328,
      Location: [12.879721, 121.774017]
    },
    {
      name: "Egypt",
      pop2022: 110990.103,
      pop2021: 109262.178,
      Location: [26.820553, 30.802498]
    },
    {
      name: "DR Congo",
      pop2022: 99010.212,
      pop2021: 95894.118,
      Location: [-4.038333, 21.758664]
    },
    {
      name: "Vietnam",
      pop2022: 98186.856,
      pop2021: 97468.029,
      Location: [14.058324, 108.277199]
    },
    {
      name: "Iran",
      pop2022: 88550.57,
      pop2021: 87923.432,
      Location: [32.427908, 53.688046]
    },
    {
      name: "Turkey",
      pop2022: 85341.241,
      pop2021: 84775.404,
      Location: [38.963745, 35.243322]
    },
    {
      name: "Germany",
      pop2022: 83369.843,
      pop2021: 83408.554,
      Location: [51.165691, 10.451526]
    },
    {
      name: "Thailand",
      pop2022: 71697.03,
      pop2021: 71601.103,
      Location: [15.870032, 100.992541]
    },
    {
      name: "United Kingdom",
      pop2022: 67508.936,
      pop2021: 67281.039,
      Location: [55.378051, -3.435973]
    },
    {
      name: "Tanzania",
      pop2022: 65497.748,
      pop2021: 63588.334,
      Location: [-6.369028, 34.888822]
    },
    {
      name: "France",
      pop2022: 64626.628,
      pop2021: 64531.444,
      Location: "[46.227638, 2.213749]"
    },
    {
      name: "South Africa",
      pop2022: 59893.885,
      pop2021: 59392.255,
      Location: [-30.559482, 22.937506]
    },
    {
      name: "Italy",
      pop2022: 59037.474,
      pop2021: 59240.329,
      Location: [41.87194, 12.56738]
    }
]
   
//   // An array containing each city's name, location, and population
//   d3.json("/static/world_population.json").then((data) => {
//     var countries = data;

//     console.log(countries);

    // Looping through the cities array, create one marker for each city, bind a popup containing its name and population, and add it to the map.
  for (var i = 0; i < countries.length; i++) {
    
   // Conditionals for country gdp_pc
   var color = "";
   if (countries[i].pop2022 > 1000000) {
     color = "yellow";
   }
   else if (countries[i].pop2022 > 100000) {
     color = "blue";
   }
   else if (countries[i].pop2022 > 10000) {
     color = "green";
   }
   else {
     color = "violet";
   }

   // Add circles to the map.
  L.circle(countries[i].Location, {
    fillOpacity: 0.75,
    color: "white",
    fillColor: color,
    // Adjust the radius.
    radius: Math.sqrt(countries[i].pop2022) * 300
  }).bindPopup(`<h1>${countries[i].name}</h1> <hr> <h3>2021 Population('000: ${countries[i].pop2021}</h3> <hr> <h3>2022 Population('000): ${countries[i].pop2022}</h3>`).addTo(myMap);
}
  
//   });
  
  
  
 