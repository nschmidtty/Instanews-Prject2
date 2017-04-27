$(function () {

  $('.option').on('click', function() {

  var url = "https://api.nytimes.com/svc/topstories/v2/home.json";

  url += '?' + $.param({
  'api-key': "e4e1ecf1196040c68e4166a75b2fffc2"
  });
  
  console.log(url);  

  $.ajax({
     method: 'GET',
     url: url
    })
    .done(function(data){
      console.log('made it');
      $.each(data.results.multimedia.url, function( index, value ){
        
        
      });
    })
    .fail(function(){
      
    })
  
  });




});