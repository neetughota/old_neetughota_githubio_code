var pie = d3.pie();
var arc = d3.arc().innerRadius(0).outerRadius(100);

var playerName = decodeURI(getUrlVars()["player"]);

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}

var svg =  d3.select("#pieFTAchart").append("svg").attr("width",300).attr("height",250),
    margin = {top: 20, right: 20, bottom: 30, left: 80},
    width = +svg.attr("width") - margin.left - margin.right,
    height = +svg.attr("height") - margin.top - margin.bottom;
  
var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  

var color =["Blue","Orange", ""]
var color = d3.scaleOrdinal()
  .domain(["FTA", "2PA", "3PA"])
  .range(d3.schemeDark2);

var g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
d3.csv("data.csv", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.filter(function(d) {  if( d.name == playerName) {return d};});
	
  svg.selectAtll("path")
  .data(filteredData)
  .enter()
  .append("path")
  .attr("d",arc)
  .attr("fill",function(d,i) { return color[i];})
  
  
  	

});

