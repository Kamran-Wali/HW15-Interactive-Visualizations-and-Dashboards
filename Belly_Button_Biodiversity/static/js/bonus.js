/* Bonus Section */

function buildGauge(wfreq) {
    
    // Enter the washing frequency between 0 and 180
    var level = parserFloat(wfreq) * 20;
    
    // Trig to calc meter point
    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);
    
    // Path may have to change to create a better triangle
    var mainPath = "M -.0 -0.05 L .0 0.05 L ";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " 2";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);
    
    var data = [
        {
          type: "scatter",
          x: [0],
          y: [0],
          marker: {size: 12, color: "850000"},
          showLegend: false,
          name: "Freq",
          text: level,
          hoverinfo: "text+name"
        },
        
    ]
    
    var GAUGE = d3.select("#gauge");
    Plotly.newPlot(GAUGE, data, layout);
}
