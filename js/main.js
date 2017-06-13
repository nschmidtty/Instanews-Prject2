$(function () {

  $('select').on('change', function () {

    $('#loading-image').show();

    $('header').css('height', 'auto');
    // $('img').css('height', 'auto');

    document.getElementById('logo').classList.add('img-clicked');
    document.getElementById('logo').classList.remove('img-no-clicked');

    var topic = $('select').find(':selected').attr('value');
    var topic_url = 'https://api.nytimes.com/svc/topstories/v2/' + topic + '.json' + '?' +
      $.param({
        'api-key': 'e4e1ecf1196040c68e4166a75b2fffc2'
      });

    $.ajax({
        url: topic_url,
        method: 'GET',
      }).done(function (data) {
        var news_img = data.results.filter(function (value) {
          return (value.multimedia.length);
        }).slice(0, 12);

        $.each(news_img, function (index, value) {
          $('.news-stories').append('<a href="' + value.url + '" id="' + index + '" class = "news-link"><p class = "abstract">' + value.abstract + '</p></a>');
          $('#' + index).css('background-image', 'url(' + value.multimedia[4].url + ')');
        });

        $('.loading-space').hide();
      })

      .fail(function (err) {
        throw err;
      });
  });

  $('select').selectric();

  $('.news-sections').change(function(){
    $("header").animate({left: '250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'});
  })


});