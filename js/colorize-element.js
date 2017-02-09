'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  element.addEventListener('click', setNewColorHandle);
  element.addEventListener('keydown', setNewColorHandle);
  function setNewColorHandle(evt) {
    var keyEnter = 13;
    if (evt.type === 'click' || evt.keyCode === keyEnter) {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      element.style[property] = colors[currentColor];
    }
  }
};
