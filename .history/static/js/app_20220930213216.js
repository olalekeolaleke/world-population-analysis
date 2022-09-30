
    function init() {

        var selector = d3.select("#selDataset");

        d3.json("/static/world_population.json").then((data) => {
            var subjectIds = data.names;

            console.log(data);

            subjectIds.forEach((id) => {
                selector 
                .append("option")
                .text(id)
                .property("value", id);
            });

            const newSample = subjectIds[0];
            updatedCharts(newSample);
            updateMetadata(newSample);
        });
    }


    function updateMetadata(sample) {
        d3.json("/static/world_population.json").then((data) => {
            var metadata = data.metadata;

            console.log(data);

            var resultArray = metadata.filter(sampleObject => sampleObject.id == sample);
            var result = resultArray[0];
            var Panel = d3.select("#sample-metadata");
                Panel.html("");
            Object.entries(result).forEach(([key, value]) => {
                Panel.append("h6").text(`${key.toUpperCase()}: ${value}`)
            })
        
    

             var data = [
                 {
                     domain: {'x': result.id, 'y': result.pop2022},
                     marker: {size: 28, color: 'royalblue'},
                     value: result.GrowthRate,
                     delta: {reference: 0, increasing: {color: "RebeccaPurple"}},
                     title: ("GrwothRate Analysis by Countries (%)"),
                     font: {
                         family: 'Raleway, sans-serif'
                     },
                     type: "indicator",
                     mode: "gauge+number+delta"
                 }
             ];

             var layout = {
                 width: 400,
                 height: 350,
                 margin: {t: 25, r: 25, l: 25, b: 25 },
                 bgcolor: "white",
                 thickness: 0.75,
                 borderwidht: 2,
             };

             Plotly.newPlot("gauge", data, layout);
        });
    }

    function updatedCharts(sample) {
        d3.json("/static/world_population.json").then((data) => {
            var samples = data.metadata;
            console.log(samples);
            var country = samples.map(obj => obj.id);
            var population = samples.map(obj => obj.pop2021);
            var population2 = samples.map(obj => obj.pop2022);
            var growthRate = samples.map(obj => obj.GrowthRate);

            console.log(country);
            console.log(population);
            console.log(growthRate);

            // Plotting bar chart
   
            var layout = {
                    height: 500,
                    width: 1000,
                    title: "Top 20 World Most Populous Countries ('000)"
                };
    var trace1 = {
         x: country.slice(0, 20),
        y: population.slice(0, 20),
        type: "bar",
        name: "2021"   
    };

var trace2 = {
    x: country.slice(0, 20),
   y: population2.slice(0, 20),
   type: "bar",
   name: "2022",
};
var newData = [trace1, trace2];
console.log(trace1);
    Plotly.newPlot("bar2", newData, layout);


    var layout = {
        height: 500,
        width: 1000,
        title: "Top 20 World Smallest Countries by Population ('000)"
    };

    // Plotting the second bar chart

    var trace3 = {
        x: country.reverse().slice(0, 20),
        y: population.reverse().slice(0, 20),
        type: 'bar',
        name: '2021'
    }

    var trace4 = {
        x: country.slice(0, 20),
       y: population2.reverse().slice(0, 20),
       type: "bar",
       name: "2022"
    };
    var newData2 = [trace3, trace4];
    // console.log(trace1);
        Plotly.newPlot("bar3", newData2, layout);

        var layout = {
            height: 500,
            width: 1000,
            title: "Top 20 World Smallest Countries by Population ('000)"
        };

    var trace5 = {
        x: country,
        y: growthRate,
        type: 'scatter'
    };
    var newData3 = [trace5];
    Plotly.newPlot("bar4", newData3,layout);
});
}

function optionChanged(newData) {


    updatedCharts(newData);
    updateMetadata(newData);
}

init();