'use strict';
var BUTTON_BYENTER = 13;
var BUTTON_CLOSE_BYESCAPE = 27;
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

window.colorizeElement(setupContainer.querySelector('#wizard-coat'), [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
], 'fill');
window.colorizeElement(setupContainer.querySelector('#wizard-eyes'), [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
], 'fill');
window.colorizeElement(setupContainer.querySelector('.setup-fireball-wrap'), [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
], 'background');

// wizardCoat.addEventListener('click', changeWizard.bind(null, wizardCoat, wizardCoatColors));
// wizardEyes.addEventListener('click', changeWizard.bind(null, wizardEyes, wizardEyesColors));

// wizardFireball.addEventListener('click', function () {
//   var fireballColorsRandom = getRandomNumber(wizardFireballColors.length);
//   wizardFireball.style.background = wizardFireballColors[fireballColorsRandom];
// });

function listenOpenBtn() {
  setupOpenHendler();
  changeAriaStatus(setupOpenBtn, 'aria-pressed');
}

function listenOpenBtnKeydown(evt) {
  if (isActiveEvent(evt)) {
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

function openSetupContainer() {
  setupContainer.classList.remove('invisible');
  setupContainerAriastatus();
}

function setupOpenHendler() {
  openSetupContainer();
  document.addEventListener('keydown', setupCloseHendler);
}

function isActiveEvent(evt) {
  return evt.keyCode && evt.keyCode === BUTTON_BYENTER;
}

function closeSetupContainer() {
  setupContainer.classList.add('invisible');
  setupContainerAriastatus();
}

function setupCloseHendler(evt) {
  if (evt.keyCode === BUTTON_CLOSE_BYESCAPE) {
    closeSetupContainer();
  }
}

function closeContainer(evt) {
  if (isActiveEvent(evt)) {
    closeSetupContainer();
  }
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
