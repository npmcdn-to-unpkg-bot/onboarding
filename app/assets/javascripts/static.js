

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

$(document).ready(setSlider);
$(document).on('page:change', function () {
  setSlider();
});

