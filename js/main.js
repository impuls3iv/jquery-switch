$(document).on('ready', function(){
  $('.on').on('click', whatHappensWhenOn)
});

function whatHappensWhenOn(){
  $('.on').removeClass('on').addClass('off')
  $('body').removeClass('light').addClass('dark')
  $('h1').html('Its so dark in here')
    $('.off').on('click', whatHappensWhenOff)
      $('.on').off('click')
};

function whatHappensWhenOff(){
  $('.off').removeClass('off').addClass('on')
  $('body').removeClass('dark').addClass('light')
  $('h1').html('Its so bright in here')
    $('.on').on('click', whatHappensWhenOn)
      $('.off').off('click')
};
