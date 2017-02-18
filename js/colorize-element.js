'use strict';

window.colorizeElement = function (callback) {
  if (typeof callback === 'function') {
    callback();
  }
};

window.utils.getRandomElementExcept();
window.utils.isDeactivationEvent();
window.utils.isActivationEvent();

window.colorizeElement(function (element, colors, property) {
  var setColor = function () {
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


// var catchPokemons = function(callback) {
//   var started = Date.now();
//   while (Date.now() - started < 100) {
//     console.log('I\'m gonna get them all');
//   }
//
//   if (typeof callback === 'function') {
//     callback();
//   }
// };
//
// catchPokemons(function() {
//   console.log('I\'m calling Karl');
// });
