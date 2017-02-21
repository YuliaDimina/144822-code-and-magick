'use strict';
// var setupOpenBtn = document.querySelector('.setup-open-icon');
window.enableSetup = function () {

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
};


// 'use strict';
//
// window.enableSetup = (function () {
//   var setupContainer = document.querySelector('.setup');
//   var setupOpenBtn = document.querySelector('.setup-open-icon');
//   var setupCloseBtn = setupContainer.querySelector('.setup-close');
//   var setupSubmitBtn = setupContainer.querySelector('.setup-submit');
//   var onSetupClose;
//
//   var openSetup = function () {
//
//     function openSetupContainer() {
//       setupContainer.classList.remove('invisible');
//       setupContainerAriastatus();
//     }
//
//     function setupOpenHendler() {
//       openSetupContainer();
//       document.addEventListener('keydown', setupCloseHendler);
//     }
//
//     function closeSetupContainer() {
//       setupContainer.classList.add('invisible');
//       if (typeof onSetupClose === 'function') {
//         onSetupClose();
//       }
//       setupContainerAriastatus();
//     }
//
//     function setupCloseHendler(evt) {
//       if (evt.keyCode === window.utils.keyCods.BUTTON_CLOSE_BYESCAPE) {
//         closeSetupContainer();
//       }
//     }
//
//     function closeContainer(evt) {
//       if (window.utils.isActiveEvent(evt)) {
//         closeSetupContainer();
//       }
//     }
//
//     function listenOpenBtn() {
//       setupOpenHendler();
//       changeAriaStatus(setupOpenBtn, 'aria-pressed');
//     }
//
//     function listenOpenBtnKeydown(evt) {
//       if (window.utils.isActiveEvent(evt)) {
//         setupOpenHendler();
//       }
//       changeAriaStatus(setupOpenBtn, 'aria-pressed');
//     }
//
//     function listenCloseBtn() {
//       closeSetupContainer();
//       changeAriaStatus(setupCloseBtn, 'aria-pressed');
//     }
//
//     function listenCloseBtnKeydown(evt) {
//       closeContainer(evt);
//       changeAriaStatus(setupCloseBtn, 'aria-pressed');
//     }
//
//     function listenSubmitBtn() {
//       closeSetupContainer();
//       changeAriaStatus(setupSubmitBtn, 'aria-pressed');
//     }
//
//     function listenSubmitBtnKeydown(evt) {
//       closeContainer(evt);
//       changeAriaStatus(setupSubmitBtn, 'aria-pressed');
//     }
//
//     function changeAriaStatus(element, aria) {
//       if (element.getAttribute(aria, false)) {
//         element.setAttribute(aria, true);
//       } else {
//         element.setAttribute(aria, false);
//       }
//     }
//
//     function setupContainerAriastatus() {
//       if (setupContainer.getAttribute('aria-hidden', true)) {
//         setupContainer.setAttribute('aria-hidden', false);
//       } else {
//         setupContainer.setAttribute('aria-hidden', true);
//       }
//     }
//     setupOpenBtn.addEventListener('click', listenOpenBtn);
//     setupOpenBtn.addEventListener('keydown', listenOpenBtnKeydown);
//     setupCloseBtn.addEventListener('click', listenCloseBtn);
//     setupCloseBtn.addEventListener('keydown', listenCloseBtnKeydown);
//     setupSubmitBtn.addEventListener('click', listenSubmitBtn);
//     setupSubmitBtn.addEventListener('keydown', listenSubmitBtnKeydown);
//   };
//
//   return function (callback) {
//     openSetup();
//     onSetupClose = callback;
//   };
//
// })();
