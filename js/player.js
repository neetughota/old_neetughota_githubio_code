
var playerName = decodeURI(getUrlVars()["player"]);
document.getElementById('playerName').innerHTML = playerName;
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
        '<div> <div class= "container"> <div class="row">'+
            '<label>' + playerName +  '</label>'+
         '<div class="row">'+
            '<label style="border-right: 1px solid #fff;padding-right: 10px;">' + filteredData[0].Team + "|" + '</label>'+
            '<label style="color: #fff;padding-left: 5px;">' +  filteredData[0].Position + '</label>'+      '
  </div></div></div>'+
    '</body>';
    
  
   document.write(html);
})
