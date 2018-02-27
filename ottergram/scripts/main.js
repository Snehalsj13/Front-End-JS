var DETAIL_IMAGE_SELECTOR = '[data-image-role="target"]';
var DETAIL_TITLE_SELECTOR = '[data-image-role="title"]';
var DETAIL_FRAME_SELECTOR = '[data-image-role="frame"]';
var THUMBNAIL_LINK_SELECTOR = '[data-image-role="trigger"]';
var HIDDEN_DETAIL_CLASS = 'hidden-detail';
var TINY_EFFECT_CLASS = 'is-tiny';
var ESC_KEY = 27;

function nextImg() {
  var curImg = document.getElementById('currentImg');
  if (curImg.src.includes('otter1')) {
    setDetails('img/otter2.jpg', 'How Deep Is Your Love');
  } else if (curImg.src.includes('otter2')) {
    setDetails('img/otter3.jpg', 'You Should Be Dancing');
  } else if (curImg.src.includes('otter3')) {
    setDetails('img/otter4.jpg', 'Night Fever');
  } else if (curImg.src.includes('otter4')) {
    setDetails('img/otter5.jpg', 'To Love Somebody');
  } else if (curImg.src.includes('otter5')) {
    setDetails('img/otter5.jpg', 'To Love Somebody');
  }
}

function previousImg() {
  var curImg = document.getElementById('currentImg');
  if (curImg.src.includes('otter4')) {
    setDetails('img/otter3.jpg', 'You Should Be Dancing');
  } else if (curImg.src.includes('otter5')) {
    setDetails('img/otter4.jpg', 'Night Fever');
  } else if (curImg.src.includes('otter1')) {
    setDetails('img/otter1.jpg', 'Stayin\' Alive');
  } else if (curImg.src.includes('otter2')) {
    setDetails('img/otter1.jpg', 'Stayin\' Alive');
  } else if (curImg.src.includes('otter3')) {
    setDetails('img/otter2.jpg', 'How Deep Is Your Love');
  }
}


function setDetails(imageUrl, titleText) {
  'use strict';
  var detailImage = document.querySelector(DETAIL_IMAGE_SELECTOR);
  detailImage.setAttribute('src', imageUrl);

  var detailTitle = document.querySelector(DETAIL_TITLE_SELECTOR);
  detailTitle.textContent = titleText;
}

function imageFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-url');
}

function titleFromThumb(thumbnail) {
  'use strict';
  return thumbnail.getAttribute('data-image-title');
}

function setDetailsFromThumb(thumbnail) {
  'use strict';
  setDetails(imageFromThumb(thumbnail), titleFromThumb(thumbnail));
}

function addThumbClickHandler(thumb) {
  'use strict';
  thumb.addEventListener('click', function(event) {
    event.preventDefault();
    setDetailsFromThumb(thumb);
    showDetails();
  });
}

function getThumbnailsArray() {
  'use strict';
  var thumbnails = document.querySelectorAll(THUMBNAIL_LINK_SELECTOR);
  var thumbnailArray = [].slice.call(thumbnails);
  return thumbnailArray;
}

function hideDetails() {
  'use strict';
  document.body.classList.add(HIDDEN_DETAIL_CLASS);
}

function showDetails() {
  'use strict';
  var frame = document.querySelector(DETAIL_FRAME_SELECTOR);
  document.body.classList.remove(HIDDEN_DETAIL_CLASS);
  frame.classList.add(TINY_EFFECT_CLASS);
  setTimeout(function() {
    frame.classList.remove(TINY_EFFECT_CLASS);
  }, 50);
}

function addKeyPressHandler() {
  'use strict';
  document.body.addEventListener('keyup', function(event) {
    event.preventDefault();
    if (event.keyCode === ESC_KEY) {
      hideDetails();
    }
  });
}

function initializeEvents() {
  'use strict';
  var thumbnails = getThumbnailsArray();
  thumbnails.forEach(addThumbClickHandler);
  addKeyPressHandler();
}

initializeEvents();
nextImg();
previousImg();
