//= require main

function setSlider() {
  $('.slider-container').ready( function() {
    $('.slider-container').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  });
}

setSlider();
