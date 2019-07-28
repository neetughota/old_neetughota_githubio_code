
var playerName = getUrlVars()["player"];
document.getElementById('playerName').innerHTML = decodeURI(playerName);
function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
async function init(){
  const data = await d3.csv('data.csv');
  var filteredData = data.filter(function(d) 
  { 
          if( d["Name"] == playerName )
          { 
              return d;
          } 
   })
  var html = ''+
    '<body>'+
        '<div>'+
            '<label>playerName</label>'+
            '<label>filteredData.Position </label>'+
        '</div>'+
    '</body>';
    
  
   document.write(html);
}
