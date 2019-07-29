
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
  
//var tooltip = d3.select("body").append("div").attr("class", "toolTip");
  


var color = d3.scaleOrdinal()
  .domain(["FTA", "2PA", "3PA"]);
 

var g = svg.append("g")
		.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
d3.csv("data.csv", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.filter(function(d) {  if( d.Name == playerName) {return d};});
	
	var pie = d3.pie();
    	//	.value(function(d) {return d.value; })
    	//	.sort(function(a, b) { console.log(a) ; return d3.ascending(a.key, b.key);} ) // This make sure that group order remains the same in the pie chart
  
	
  
	var newData ={};
	newData.FTA =  parseInt(filteredData[0]["FTA"]);
	newData["2PA"] = parseInt(filteredData[0]["2PA"]);
	newData["3PA"] = parseInt(filteredData[0]["3PA"]);
	
	var data_ready = pie(d3.entries([newData.FTA ,newData["2PA"],newData["3PA"]]));
	
	g.selectAll("path")
	  .data(pie(newData))
	  .enter()
	  .append("path")
	  .attr("d",arc)
	  .attr("fill",function(d,i) { return color[i];})
  
  
  	

});

