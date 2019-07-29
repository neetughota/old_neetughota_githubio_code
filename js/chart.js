

var playerName = decodeURI(getUrlVars()["player"]);

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var svg =  d3.select("#linechart").append("svg"),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
  
var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  
var x = d3.scaleLinear().range([0, width]);
var y = d3.scaleBand().range([height, 0]);

var g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
d3.json("Roster.json", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.players.filter(function(d) {  if( d.name == playerName) {return d};});
	var newData = {};
	var newData.Rating =[]; 
	var newData.RatingValue =[]; 
	for (var key in filteredData[0]["ratings"][0]) {
  		newData.Rating.push( key);
		newData.Rating.push( filteredData[0]["ratings"][0][key]);
	}
  	//data.sort(function(a, b) { return a.value - b.value; });
  
  	x.domain([0, d3.max(data, function(d){ return  d.RatingValue ; })])
        y.domain(data.map(function(d) { return d.Rating }));

    g.append("g")
        .attr("class", "x axis")
       	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d / 1000); }).tickSizeInner([-height]));

    g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));

    g.selectAll(".bar")
        .data(newData)
      .enter().append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.bandwidth())
        .attr("y", function(d) { return y(d.Rating); })
        .attr("width", function(d) { return x(d.value); })
        .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.area) + "<br>" + "£" + (d.value));
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});
});
