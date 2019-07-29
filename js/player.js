
var playerName = decodeURI(getUrlVars()["player"]);

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
    vars[key] = value;
  });
  return vars;
}
d3.json('Roster.json',function (data) {
  
  var filteredData =  data.players.filter(function(d) {  if( d.name == playerName) {return d};});
    

  var html = '<div class="row" style="margin-right: 15px;margin-left: 15px;">'+
            '<label>' + playerName +  '</label>' +
        '</div>'+
         '<div class="row" style="margin-right: 15px;margin-left: 15px;">'+
            '<label style="border-right: 1px solid #fff;padding-right: 10px;">' + filteredData[0].Position   + " | " + '</label>'+
            '<label style="padding-left: 5px;">' + filteredData[0].Team + '</label>'+
          '</div><div class="row" style="margin-right: 15px;margin-left: 15px;"> <div class="col"> <label> Ht:  6-5 </label> </div> <div class="col"> <label> Wt:  220lbs </label> </div>'+
      '<div class="col"> <label> Prior: Boston Celtics </label> </div> <div class="col"> <label> Age:  22 </label> </div>'+   
      '</div>';
   
   document.getElementById('container').insertAdjacentHTML('afterbegin',html);
  
   //document.write(html);
})
