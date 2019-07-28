var tabulate = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#pointspergame").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Points per Game") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','PPG']
 tabulate(data,columns)
})

var tabulate = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("body").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Rebounds per Game") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','RPG']
 tabulate(data,columns)
})


var tabulate2 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#reboundpergame").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Steals per Game") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','SPG']
 tabulate2(data,columns)
})


var tabulate3 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#assistpergame").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Assists per Game") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','APG']
 tabulate3(data,columns)
})


var tabulate4 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#blockspergame").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Offensive Rating") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','OffRating']
 tabulate4(data,columns)
})


var tabulate5 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#stealpergame").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Defensive Rating") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','DefRating']
 tabulate5(data,columns)
})

var tabulate6 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#fieldgoalpercentage").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Minutes per Game") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','MPG']
 tabulate6(data,columns)
})


var tabulate7 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#threepointermade").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Free Throw %") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','FTPt']
 tabulate7(data,columns)
})


var tabulate8 = function (data,columns) {
 var margin = {top: 20, right: 10, bottom: 20, left: 10}
 var width = 500 - margin.left - margin.right, height = 300 - margin.top - margin.bottom	
 var svg = d3.select("#threepointpercentage").append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom) 
 .append("g")
 .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
 var svgtext = svg.append("text")
 .attr("x",(width/2))
 .attr("y",0-(margin.top/4))
 .style("text-anchor","middle")
 .style("font-size","16px")
 .style("text-decoration","underline")
 .style("font-weight","bold")
 .text("Field Goal %") 
 
 var forobj = svg.append("foreignObject")
 .attr("width", 300)
 .attr("height", 200)
 .append("xhtml:body")
 var table = forobj.append("table")
 var thead = table.append('thead')
 var tbody = table.append('tbody')
	thead.append('tr')
	.selectAll('th')
	.data(columns)
	.enter()
	.append('th')
	.text(function (d) { return d })

	var rows = tbody.selectAll('tr')
	.data(data)
	.enter()
	.append('tr')

	var cells = rows.selectAll('td')
	.data(function(row) {
	return columns.map(function (column) {
	return { column: column, value: row[column] }
	})
 })
 .enter()
 .append('td')
 .text(function (d) { return d.value })

 return table;
}

d3.csv('data.csv',function (data) {
	var columns = ['Name','Team','Position','FGPt']
 tabulate8(data,columns)
})