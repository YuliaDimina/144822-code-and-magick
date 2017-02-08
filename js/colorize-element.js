'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = colors[0];
  function colorizeMainFunction(evt) {
    var keyEnter = 13;
    if (evt.type === 'click' || evt.keyCode === keyEnter) {
      currentColor = window.getRandomElementExcept(colors, currentColor);
      element.style[property] = colors[currentColor];
    }
  }
  element.addEventListener('click', colorizeMainFunction);
  element.addEventListener('keydown', colorizeMainFunction);
};
