

var playerName = decodeURI(getUrlVars()["player"]);

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}


d3.json("Roster.json", function(error, data) {
  	if (error) throw error;
  	var filteredData =  data.players.filter(function(d) {  if( d.name == playerName) {return d};});
	var newData = []; 
	for (var key in filteredData[0]["ratings"][0]) {
		var newObj ={};
  		newObj.Rating =  key;
		newObj.RatingValue =( filteredData[0]["ratings"][0][key]); 
		newData.push(newObj);
	}
  	//data.sort(function(a, b) { return a.value - b.value; });
	var svg =  d3.select("#linechart").append("svg").attr("width",660).attr("height",300),
    	margin = {top: 20, right: 20, bottom: 30, left: 80},
    	width = +svg.attr("width") - margin.left - margin.right,
   	 height = +svg.attr("height") - margin.top - margin.bottom;
  
	var tooltip = d3.select("#linechart").append("div").attr("class", "toolTip");
  

	var g = svg.append("g")
		.attr("transform", "translate("+ margin.top + "," + margin.top  + ")");
  
  	var x = d3.scaleLinear().range([0, width]);
	var y = d3.scaleBand().range([height, 0]).padding(.1);
	var color = d3.scaleOrdinal(d3.schemeCategory10);

  	x.domain([0, d3.max(newData, function(d){ return  d.RatingValue ; })])
        y.domain(newData.map(function(d) { return d.Rating }));
 	color.domain(newData.map(function(d) { return d.Rating }));
    
	g.append("g")
        .attr("class", "x axis")
       	.attr("transform", "translate(0," + height + ")")
      	.call(d3.axisBottom(x).ticks(10).tickFormat(function(d) { return parseInt(d ); }).tickSizeInner([2]));

    	g.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y));

	 var bars = g.selectAll(".bar")
            .data(newData)
            .enter()
            .append("g");

	
   // g.selectAll(".bar")
    //        .data(newData)
     //       .enter()
      //      .append("g")
	 
      bars.append("rect")
        .attr("class", "bar")
        .attr("x", 0)
        .attr("height", y.bandwidth())
        .attr("y", function(d) { return y(d.Rating); })
        .attr("width", function(d) { return x(d.RatingValue); })
	 .style('fill',function(d,i) {return color(i);})
        .on("mousemove", function(d){
            tooltip
              .style("left", d3.event.pageX - 50 + "px")
              .style("top", d3.event.pageY - 70 + "px")
              .style("display", "inline-block")
              .html((d.Rating) + "<br>" +  + (d.RatingValue));
        })
    		.on("mouseout", function(d){ tooltip.style("display", "none");});
	
	
	bars.append("text")
            .attr("class", "label")
            //y position of the label is halfway down the bar
            .attr("y", function (d) {
                return y(d.Rating) + y.bandwidth() / 2 + 4;
            })
            //x position is 3 pixels to the right of the bar
            .attr("x", function (d) {
                return x(d.RatingValue) + 3;
            })
            .text(function (d) {
                return d.RatingValue;
            })
});

