'use strict';
window.utils = (function () {
  var keyCods = {
    BUTTON_BYENTER: 13,
    BUTTON_CLOSE_BYESCAPE: 27
  };

  var getRandomElement = function (someArray) {
    return Math.floor(Math.random() * someArray.length);
  };

  var getRandomElementExcept = function (someArray, value) {
    var newValue = null;
    do {
      newValue = getRandomElement(someArray);
    } while (newValue === value);
    return newValue;
  };

  var isDeactivationEvent = function (evt) {
    return evt.keyCode && evt.keyCode === window.utils.keyCods.BUTTON_CLOSE_BYESCAPE;
  };

  var isActiveEvent = function (evt) {
    return evt.keyCode && evt.keyCode === window.utils.keyCods.BUTTON_BYENTER;
  };

  return {
    keyCods: keyCods,
    getRandomElement: getRandomElement,
    getRandomElementExcept: getRandomElementExcept,
    isDeactivationEvent: isDeactivationEvent,
    isActivationEvent: isActiveEvent
  };
})();
window.utils.getRandomElementExcept();
window.utils.isDeactivationEvent();
window.utils.isActivationEvent();
