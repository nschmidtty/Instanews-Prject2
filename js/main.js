$(function () {

  $('select').on('change', function () {

    

    $('header').css('height', 'auto');
    $('img').css('height', 'auto');

    document.getElementById("logo").classList.add('img-clicked');
    document.getElementById("logo").classList.remove('img-no-clicked');

    var topic = $('select').find(':selected').attr('value')
    var topic_url = 'https://api.nytimes.com/svc/topstories/v2/' + topic + '.json' + '?' 
                    + $.param({  'api-key': 'e4e1ecf1196040c68e4166a75b2fffc2'
                    });
    console.log(topic_url);

    $.ajax({
        url: topic_url,
        method: 'GET',
      }).done(function (data) {

        

        var news = data.results.filter(function (value) {
          return (value.multimedia.length)
        });

        news = news.slice(0, 12);

        $.each(news, function (index, value) {
          //console.log(value.multimedia[1].url);
          $('.news-stories').append('<a href="' + value.url + '" id="' + index + '"><p>' + value.abstract + '</p></a>');
          $('#' + index).css('background-image', 'url(' + value.multimedia[4].url) + ')';
        })

      })

      .fail(function (err) {
        throw err;
      });
  });
});