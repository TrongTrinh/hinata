$(document).ready(function () {
  $('#bgmain').bxSlider({
    mode: 'fade',
    auto: true,
    pager: false,
    control: false,
    speed: 1000,
    touchEnabled: false,
    onSliderLoad: function () {
      $('ul.bxslider li span').css('visibility', 'visible');
    },
  });
});
