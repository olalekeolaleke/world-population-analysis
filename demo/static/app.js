let csvToJson = require('convert-csv-to-json');

let fileInputName = '/demo/Resources/unemployment-analysis.csv'; 
let fileOutputName = 'myOutputFile.json';

csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);

let csvToJson = require('convert-csv-to-json');

let json = csvToJson.getJsonFromCsv("/demo/Resources/unemployment-analysis.csv");
for(let i=0; i<json.length;i++){
    console.log(json[i]);
}