


var playerName = decodeURI(getUrlVars()["player"]);

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}


  
d3.csv("data.csv", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.filter(function(d) {  if( d.Name == playerName) {return d};});
	
	var newData ={};
	newData.FTA =  parseInt(filteredData[0]["FTA"]);
	newData["2PA"] = parseInt(filteredData[0]["2PA"]);
	newData["3PA"] = parseInt(filteredData[0]["3PA"]);
	var svg =  d3.select("#pieFTAchart").append("svg").attr("width",300).attr("height",300),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
  
var tooltip = d3.select("#pieFTAchart").append("div").attr("class", "toolTip");
  

var radius = Math.min(width, height) / 2 - margin.top;

var color = ["Red","Blue", "Yellow"];
 
var arc = d3.arc().innerRadius(0).outerRadius(radius);

var g = svg.append("g")
		.attr("transform", "translate(" +width/2 + "," + height/2 + ")");
	
	var pie = d3.pie()
   		.value(function(d) {return d.value; })
    		.sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  	
	var data_ready = pie(d3.entries(newData));
	
	g.selectAll("path")
	  .data(data_ready)
	  .enter()
	  .append("path")
	  .attr("d",arc)
	  .attr("fill",function(d,i) { 
	
		return color[i];
	}).on("mousemove", function(d,i){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((data_ready[i].data.key) + "<br>" +  + (data_ready[i].data.value));
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");})
	.attr("stroke", "white")
    .style("stroke-width", "2px")
    .style("opacity", 1);
	
  
  g.selectAll("path")
	  .data(data_ready)
	  .enter()
  	.append('text')
  	.text(function(d){ return "grp " + d.data.key})
  	.attr("transform", function(d) { return "translate(" + arc.centroid(d) + ")";  })
  	.style("text-anchor", "middle")
  	.style("font-size", 17)

  	

});

