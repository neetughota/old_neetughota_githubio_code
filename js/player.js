
var playerName = getUrlVars()["player"];
document.getElementById('playerName').innerHTML = decodeURI(playerName);
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
d3.csv('data.csv',function (data) {
  
  var filteredData =  data.filter(function(d) {
          if( d["Name"] == playerName )
          { 
              return d;
          } 
    });

  var html = ''+
    '<body>'+
        '<div>'+
            '<label>playerName</label>'+
            '<label>filteredData.Position </label>'+
        '</div>'+
    '</body>';
    
  
   document.write(html);
})
