'use strict';

window.getRandomElement = function (someArray) {
  return Math.floor(Math.random() * someArray.length);
};

window.getRandomElementExcept = function (someArray, currentValue) {
  var newValue = null;
  do {
    newValue = window.getRandomElement(someArray);
  } while (newValue === currentValue);
  return newValue;
};
