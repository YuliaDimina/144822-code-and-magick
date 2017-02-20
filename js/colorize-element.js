'use strict';

window.colorizeElement = function (element, colors, callback) {
  var newColorIndex = window.utils.getRandomElement(colors);
  callback(element, colors[newColorIndex]);
};
