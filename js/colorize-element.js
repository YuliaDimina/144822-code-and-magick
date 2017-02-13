'use strict';

window.colorizeElement = (function () {
  var setColor = function (element, colors, property) {
    var currentColor = element.style[property];
    element.addEventListener('click', setNewColorHandle);
    element.addEventListener('keydown', setNewColorHandle);
    function setNewColorHandle(evt) {
      if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
        currentColor = window.utils.getRandomElementExcept(colors, currentColor);
        element.style[property] = colors[currentColor];
      }
    }
  };
  return setColor;
})();
