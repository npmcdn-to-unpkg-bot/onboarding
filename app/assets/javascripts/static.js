const $win = $(window);
const $document = $(document);

function setSlider() {
  const sliderContainer = $('.slider-container');
  sliderContainer.ready(function () {
    sliderContainer.slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });
  });
}

function getSectionsPositions() {
  const positions = {};
  positions[$('#intro').offset().top] = 'intro';
  positions[$('#slider').offset().top] = 'slider';
  positions[$('#participate').offset().top] = 'participate';
  positions[$('#events').offset().top] = 'events';
  positions[$('#community').offset().top] = 'community';
  positions[$('#activity').offset().top] = 'activity';
  positions[$('#about').offset().top] = 'about';
  return positions;
}

function setItemKey(positions, windowTop) {
  const keys = Object.keys(positions);
  let key = 0;
  let h = $win.height();
  let dh = $document.height();
  const len = keys.length;

  for (let i = 0; i < len; i++) {
    if (windowTop < keys[i] && i !== 0) {
      key = i - 1;
      break;
    } else if ((windowTop + h) === dh) {
      key = len - 1;
      break;
    } else if (windowTop > keys[i] || i === len - 1) {
      key = i;
    } else {
      key = 0;
    }
  }
  return key;
}

function clearActiveDots() {
  const items = document.getElementsByClassName('dot-item');

  for (let i = 0; i < items.length; i++) {
    const item = document.getElementsByClassName('dot-item')[i];
    const itemClass = item.getAttribute('class');
    item.setAttribute('class', itemClass.replace('-active', ''));
  }
}

function setActiveDot(positions, key) {
  const keys = Object.keys(positions);
  const elementClass = document.getElementById(positions[keys[key]] + '-dot').getAttribute('class');
  document.getElementById(positions[keys[key]] + '-dot').setAttribute('class', elementClass + ' -active');
}

function setDotOn() {
  const positions = getSectionsPositions();
  const windowTop = $win.scrollTop();
  const key = setItemKey(positions, windowTop);

  clearActiveDots();
  setActiveDot(positions, key);
}

$document
  .on('ready', function () {
    setSlider();
    setDotOn();
  })
  .on('page:change', function () {
    setSlider();
  });

/* Sets dots to turn one when in section */
$win.on('scroll', function () {
  setDotOn();
});
