// set the dimensions and margins of the graph
var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

// set the ranges
var x = d3.scaleTime().range([0, width]);
var y = d3.scaleLinear().range([height, 0]);

// define the 1st line
var valueline = d3.line()
    .x(function(d) { return x(d.FTA ); })
    .y(function(d) { return y(d.FTM); });

// define the 2nd line
var valueline2 = d3.line()
    .x(function(d) { return x(d.2PA); })
    .y(function(d) { return y(d.2PM); });

var valueline3 = d3.line()
    .x(function(d) { return x(d.3PA); })
    .y(function(d) { return y(d.3PM); });
    
// append the svg obgect to the body of the page
// appends a 'group' element to 'svg'
// moves the 'group' element to the top left margin
var svg = d3.select("#linechart").append("svg")
  Math.max(  .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Get the data
d3.csv("data.csv", function(error, data) {
  if (error) throw error;


  // Scale the range of the data
  x.domain(d3.extent(data, function(d) { return  Math.max(Math.max(d.FTA, d.2PA), d.3PA) ; }));
  y.domain([0, d3.max(data, function(d) {
	  return Math.max(Math.max(d.FTM, d.2PA), d.3PM) ; })]);

  // Add the valueline path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .attr("d", valueline);

  // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "red")
      .attr("d", valueline2);

 // Add the valueline2 path.
  svg.append("path")
      .data([data])
      .attr("class", "line")
      .style("stroke", "blue")
      .attr("d", valueline3);
      
  // Add the X Axis
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // Add the Y Axis
  svg.append("g")
      .call(d3.axisLeft(y));

});

