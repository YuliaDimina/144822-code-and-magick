'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    var newColor = null;
    while (!newColor || newColor === currentColor) {
      newColor = window.getRandomElementExcept(colors, currentColor);
    }
    currentColor = newColor;
    element.style[property] = colors[newColor];
  });
};
