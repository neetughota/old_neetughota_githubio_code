
var playerName = decodeURI(getUrlVars()["player"]);

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
            '<label>' + playerName +  '</label></div>'+
         '<div class="row">'+
            '<label style="border-right: 1px solid #fff;padding-right: 10px;">' + filteredData[0].Position   + " | " + '</label>'+
            '<label style="padding-left: 5px;">' + filteredData[0].Team + '</label>'+
          '</div><div class="row"> <div class="col"> <label> Ht:  6-5 </label> </div> <div class="col"> <label> Wt:  220lbs </label> </div>'+
      '<div class="col"> <label> Prior: Boston Celtics </label> </div> <div class="col"> <label> Age:  22 </label> </div>'+   
      '</div></div></div>'+
    '</body>';
    
  
   document.write(html);
})
