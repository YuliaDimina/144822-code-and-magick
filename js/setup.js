'use strict';

var setupOpenBtn = document.querySelector('.setup-open-icon');
var setupSimilar = document.querySelector('.setup-similar');

window.enableSetup(function () {
  setupOpenBtn.focus();
});

window.load(function(data) {
  setupSimilar.innerHTML = '';
  console.log(data);

  var fragment = document.createDocumentFragment();

  data.forEach(function (it) {
    fragment.appendChild(window.render(it));
  });

  setupSimilar.appendChild(fragment);
});

var coatEl = document.querySelector('#wizard-coat');
var coatElColotize = function (evt) {
  window.colorizeElement(coatEl, [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ], fillElement);
};
coatEl.addEventListener('click', coatElColotize);
coatEl.addEventListener('keydown', coatElColotize);

var eyesEl = document.querySelector('#wizard-eyes');
var eyesElColorize = function (evt) {

  window.colorizeElement(eyesEl, [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ], fillElement);
};

eyesEl.addEventListener('click', eyesElColorize);
eyesEl.addEventListener('keydown', eyesElColorize);


var fireBallEl = document.querySelector('.setup-fireball-wrap');
var fireBallElColorize = function (evt) {

  window.colorizeElement(fireBallEl, [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ], changeElementBackground);

};

fireBallEl.addEventListener('click', fireBallElColorize);
fireBallEl.addEventListener('keydown', fireBallElColorize);

var fillElement = function (element, color) {
  element.style.fill = color;
};

var changeElementBackground = function (element, color) {
  element.style.backgroundColor = color;
};

// function changeAriaStatus(element, aria) {
//   var result = element.getAttribute(aria, false);
//   element.setAttribute(aria, result);
// }
