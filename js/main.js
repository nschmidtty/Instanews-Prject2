$(function () {

  $('select').on('change', function() {

  // var topic = ('option').value();
  //  var url123 = "https://api.nytimes.com/svc/topstories/v2/" + topic + ".json";
  //  console.log(url123);

  var url = "https://api.nytimes.com/svc/topstories/v2/opinion.json";

  url += '?' + $.param({
  'api-key': "e4e1ecf1196040c68e4166a75b2fffc2"

  });
  
  console.log(url);  

  $.ajax({
  url: url,
  method: 'GET',
}).done(function(data) {
   var news = data.results.filter(function(value){
   return (value.multimedia !== undefined)
  });
   
  news = news.slice(0, 12);

  console.log(news);

  $.each(news, function(index, value){
    console.log(value.multimedia[1].url);
    $('.news-stories').append('<a href="' + value.url + '" id="' + index +'">' + value.abstract + '</a>');
    $( "#"+index ).css( "background-image", 'url('+value.multimedia[4].url)+')';
  })

  
 


    })
  
  .fail(function(err) {
    throw err;
  });
});
}); 