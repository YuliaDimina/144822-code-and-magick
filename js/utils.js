'use strict';

window.getRandomElement = function (someArrey) {
  return Math.floor(Math.random() * someArrey.length);
};

window.getRandomElementExcept = function (someArrey, currentValue) {
  var newValue = null;
  while (newValue === currentValue) {
    newValue = window.getRandomElement(someArrey);
  }
  currentValue = newValue;
};
