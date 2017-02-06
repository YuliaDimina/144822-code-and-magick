'use strict';
// создаем константы для кнопок управления с клавиатуры enter и escape
var BUTTON_BYENTER = 13;
var BUTTON_CLOSE_BYESCAPE = 27;
var changeAriaStatus = function (element, aria) {
  if (element.getAttribute(aria, false)) {
    element.setAttribute(aria, true);
  }
};
// находим контейнер формы настроек персонажа
var setupContainer = document.querySelector('.setup');
// находим кнопку открытия контейнера
var setupContainerAriastatus = function () {
  if (setupContainer.getAttribute('aria-hidden', true)) {
    setupContainer.setAttribute('aria-hidden', false);
  } else {
    setupContainer.setAttribute('aria-hidden', true);
  }
};
var setupOpenBtn = document.querySelector('.setup-open-icon');
// в контейнере формы настроек находим кнопку закрытия контейнера
var setupOpenBtnAriastatus = changeAriaStatus(setupOpenBtn, 'aria-pressed');
var setupCloseBtn = setupContainer.querySelector('.setup-close');
// в контейнере формы настроек находим кнопку сохранения
var setupCloseBtnAriastatus = changeAriaStatus(setupCloseBtn, 'aria-pressed');
var setupSubmitBtn = setupContainer.querySelector('.setup-submit');
// находим части svg-картинки персонажа, которые будем менять по клику
// и задаем массивы цветов, которые будем применять по клику
var setupSubmitBtnAriastatus = changeAriaStatus(setupSubmitBtn, 'aria-pressed');
var wizardCoat = setupContainer.querySelector('#wizard-coat');
var wizardCoatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];
var wizardEyes = setupContainer.querySelector('#wizard-eyes');
var wizardEyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];
var wizardFireball = setupContainer.querySelector('.setup-fireball-wrap');
var wizardFireballColors = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];
var wizardFace = setupContainer.querySelector('#wizard-face');
// задаем функцию открытия\закрытия контейнера формы (добавления\снятия соответствующего класса)
var openSetupContainer = function () {
  setupContainer.classList.remove('invisible');
  setupContainerAriastatus();
};
var closeSetupContainer = function () {
  setupContainer.classList.add('invisible');
};
// задаем функцию отслеживания события клавиатуры "нажатие кнопки enter"
var isActiveEvent = function (evt) {
// узнаем, что Событие клавиатуры было && узнаем, что это именно Событие нажатия enter
  return evt.keyCode && evt.keyCode === BUTTON_BYENTER;
};
// задаем функцию закрытия контейнера формы по Событию нажатия кнопки escape
var setupCloseHendler = function (evt) {
  if (evt.keyCode === BUTTON_CLOSE_BYESCAPE) {
    closeSetupContainer();
  }
};
// задаем функцию открытия контейнера формы и одновременного отслеживания нажатия escape
// с последующим закрытием контейнера формы
var setupOpenHendler = function () {
  // создавали для снятия класса invisible
  openSetupContainer();
  // закрытие по Событию кнопки escape внутри открытого контейнера формы
  document.addEventListener('keydown', setupCloseHendler);
  // меняем атрибут роли
  setupOpenBtnAriastatus();
};

// задаем функцию открытия контейнера формы настроек персонажа по КЛИКУ НА
// кнопку открытия формы (сюда входит вся предыдущая колбасня с присвоением классов,
// ослеживанием событий клавиатуры и прочими бубенцами)
setupOpenBtn.addEventListener('click', setupOpenHendler);
// задаем функцию открытия контейнера формы настроек персонажа по НАЖАТИЮ НА
// кнопку открытия формы (сюда входит вся предыдущая колбасня с присвоением классов,
// ослеживанием событий клавиатуры и прочими бубенцами Плюс отслеживание события кнопки Enter)
setupOpenBtn.addEventListener('keydown', function (evt) {
  if (isActiveEvent(evt)) {
    setupOpenHendler();
  }
});
// тупо задаем функцию закрытия контейнера формы настроек по КЛИКУ НА кнопку закрытия
setupCloseBtn.addEventListener('click', function () {
  closeSetupContainer();
  setupCloseBtnAriastatus();
});
// не так тупо (уже с проверкой на Событие нажатия Enter) задаем функцию закрытия
// контейнера формы настроек по НАЖАТИЮ НА кнопку закрытия
setupCloseBtn.addEventListener('keydown', function (evt) {
  if (isActiveEvent(evt)) {
    closeSetupContainer();
  }
  setupCloseBtnAriastatus();
});
// опять тупо задаем функцию закрытия контейнера формы настроек по КЛИКУ НА
// кнопку сохранения настроек персонажа
setupSubmitBtn.addEventListener('click', function () {
  closeSetupContainer();
  setupSubmitBtnAriastatus();
});
// опять но уже не так тупо (с проверкой на Событие кнопки Enter)
// задаем функцию закрытия контейнера формы настроек по НАЖАТИЮ НА
// кнопку сохранения настроек персонажа
setupSubmitBtn.addEventListener('keydown', function (evt) {
  if (isActiveEvent(evt)) {
    closeSetupContainer();
  }
  setupSubmitBtnAriastatus();
});
// создаем колдунство с непредсказуемой сменой цветов по клику на (там в самом в начале
// определенный нами) участок svg-картинки нашего персонажа
wizardCoat.addEventListener('click', function () {
  // записываем в переменную рандомный цвет, полученный с помощью хитровыстраданной
  // функции (см. в самом конце) из массива цветов
  var coatColorRandom = getRandomNumber(wizardCoatColors.length);
  // в стиль заливки svg выбранного участка (плащик в данном случае) записываем полученную переменную
  // рандомного цвета - указываем ранее определенный массив (см в самом верху),
  // а в кадратных скобках указываем рандомное значение из этого массива
  wizardCoat.style.fill = wizardCoatColors[coatColorRandom];
});
// Повторяем те же танцы с бубном вокруг остальных участков svg-картинки, которые ранее наметили
// менять по клику
wizardEyes.addEventListener('click', function () {
  var eyesColorRandom = getRandomNumber(wizardEyesColors.length);
  wizardEyes.style.fill = wizardEyesColors[eyesColorRandom];
});

wizardFireball.addEventListener('click', function () {
  var fireballColorsRandom = getRandomNumber(wizardFireballColors.length);
  wizardFireball.style.background = wizardFireballColors[fireballColorsRandom];
});

wizardFace.addEventListener('click', function () {
  wizardFace.style.fill = 'rgb(251, 216,' + Math.floor((Math.random() * 8) * 20) + ')';
});
// создаем функцию получения случайного значения из массивов всех ранее заданных цветов
function getRandomNumber(maxNum) {
  return Math.floor(Math.random() * maxNum);
}
// удовлетворенно откидываемся, ждем когда наставник проверит и скажет, что
// все к чегтавой бабушке переписать с нуля!
