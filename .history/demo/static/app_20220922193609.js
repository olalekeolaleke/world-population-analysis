// Data Source

const url = "https://raw.githubusercontent.com/olalekeolaleke/Project-3/Olaleke-Sangogade/clean-data/unemployment_rate.csv";

async function getData(){

    // Get csv
const response = await fetch(url);

// Process data
const rawData = await response.text();

// Publish Data
document.getElementById("csv").innerHTML = rawData;
 // Develop info
console.log(rawData);
console.log("rawData type: " + typeof rawData);

}

// Call the function
getData();




