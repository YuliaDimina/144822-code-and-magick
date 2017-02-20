'use strict';
var setupContainer = document.querySelector('.setup');
var setupOpenBtn = document.querySelector('.setup-open-icon');
var setupCloseBtn = setupContainer.querySelector('.setup-close');
var setupSubmitBtn = setupContainer.querySelector('.setup-submit');

setupOpenBtn.addEventListener('click', listenOpenBtn);
setupOpenBtn.addEventListener('keydown', listenOpenBtnKeydown);
setupCloseBtn.addEventListener('click', listenCloseBtn);
setupCloseBtn.addEventListener('keydown', listenCloseBtnKeydown);
setupSubmitBtn.addEventListener('click', listenSubmitBtn);
setupSubmitBtn.addEventListener('keydown', listenSubmitBtnKeydown);

var coatEl = setupContainer.querySelector('#wizard-coat');

coatEl.addEventListener('click', function (evt) {

  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(coatEl, [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ], fillElement);
  }

});

coatEl.addEventListener('keydown', function (evt) {
  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(coatEl, [
      'rgb(101, 137, 164)',
      'rgb(241, 43, 107)',
      'rgb(146, 100, 161)',
      'rgb(56, 159, 117)',
      'rgb(215, 210, 55)',
      'rgb(0, 0, 0)'
    ], fillElement);
  }
});

var eyesEl = setupContainer.querySelector('#wizard-eyes');

eyesEl.addEventListener('click', function (evt) {

  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(eyesEl, [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ], fillElement);
  }

});

eyesEl.addEventListener('keydown', function (evt) {

  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(eyesEl, [
      'black',
      'red',
      'blue',
      'yellow',
      'green'
    ], fillElement);
  }

});


var fireBallEl = setupContainer.querySelector('.setup-fireball-wrap');

fireBallEl.addEventListener('click', function (evt) {

  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(fireBallEl, [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ], changeElementBackground);
  }

});

fireBallEl.addEventListener('keydown', function (evt) {

  if (evt.type === 'click' || evt.keyCode === window.utils.keyCods.BUTTON_BYENTER) {
    window.colorizeElement(fireBallEl, [
      '#ee4830',
      '#30a8ee',
      '#5ce6c0',
      '#e848d5',
      '#e6e848'
    ], changeElementBackground);
  }

});

var fillElement = function (element, color) {
  element.style.fill = color;
};

var changeElementBackground = function (element, color) {
  element.style.backgroundColor = color;
};

function openSetupContainer() {
  setupContainer.classList.remove('invisible');
  setupContainerAriastatus();
}

function setupOpenHendler() {
  openSetupContainer();
  document.addEventListener('keydown', setupCloseHendler);
}

function closeSetupContainer() {
  setupContainer.classList.add('invisible');
  setupContainerAriastatus();
}

function setupCloseHendler(evt) {
  if (evt.keyCode === window.utils.keyCods.BUTTON_CLOSE_BYESCAPE) {
    closeSetupContainer();
  }
}

function closeContainer(evt) {
  if (window.utils.isActiveEvent(evt)) {
    closeSetupContainer();
  }
}

function listenOpenBtn() {
  setupOpenHendler();
  changeAriaStatus(setupOpenBtn, 'aria-pressed');
}

function listenOpenBtnKeydown(evt) {
  if (window.utils.isActiveEvent(evt)) {
    setupOpenHendler();
  }
  changeAriaStatus(setupOpenBtn, 'aria-pressed');
}

function listenCloseBtn() {
  closeSetupContainer();
  changeAriaStatus(setupCloseBtn, 'aria-pressed');
}

function listenCloseBtnKeydown(evt) {
  closeContainer(evt);
  changeAriaStatus(setupCloseBtn, 'aria-pressed');
}

function listenSubmitBtn() {
  closeSetupContainer();
  changeAriaStatus(setupSubmitBtn, 'aria-pressed');
}

function listenSubmitBtnKeydown(evt) {
  closeContainer(evt);
  changeAriaStatus(setupSubmitBtn, 'aria-pressed');
}

function changeAriaStatus(element, aria) {
  if (element.getAttribute(aria, false)) {
    element.setAttribute(aria, true);
  } else {
    element.setAttribute(aria, false);
  }
}

function setupContainerAriastatus() {
  if (setupContainer.getAttribute('aria-hidden', true)) {
    setupContainer.setAttribute('aria-hidden', false);
  } else {
    setupContainer.setAttribute('aria-hidden', true);
  }
}

// function changeAriaStatus(element, aria) {
//   var result = element.getAttribute(aria, false);
//   element.setAttribute(aria, result);
// }
