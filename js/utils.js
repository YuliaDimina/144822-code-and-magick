'use strict';
window.utils = {};
window.utils.getRandomElement = function (someArray) {
  return Math.floor(Math.random() * someArray.length);
};

window.utils.getRandomElementExcept = function (someArray, value) {
  var newValue = null;
  do {
    newValue = window.utils.getRandomElement(someArray);
  } while (newValue === value);
  return newValue;
};
