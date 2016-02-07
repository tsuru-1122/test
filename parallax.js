$(function() {
  var section2Top = $('#section2').offset().top;
  var section3Top = $('#section3').offset().top;
  var sectionImg1Top = $('#sectionImg1').offset().top;
  $(window).scroll(function() {
    var value = $(this).scrollTop(); //スクロール初期値
    $('#scrollValue').text(value);
    if (value > section2Top) {
      $('.section2').css('background-position-y', value - section2Top);
    } else {
      $('.section2').css('background-position-y', 'top');
    }
    if (value > section3Top) {
      $('.section3').css('background-position-y', (value - section3Top)*2);
    } else {
      $('.section3').css('background-position-y', 'top');
    }
    if (value > sectionImg1Top) {
      var section4Top = value - sectionImg1Top - 800;
      $('.section4').css('background-position-y', section4Top);
    } else {
      $('.section4').css('background-position-y', -200);
    }
  });
});
