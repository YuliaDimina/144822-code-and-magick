var setupForm = document.querySelector('.setup');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = document.querySelector('.setup-close');
    var wizardCoat = document.querySelector('#wizard-coat');
    var wizardCoatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var wizardEyes = document.querySelector('#wizard-eyes');
    var wizardEyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
    var wizardFireball = document.querySelector('.setup-fireball-wrap');
    var wizardFireballColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var wizardFace = document.querySelector('#wizard-face');

    setupOpen.addEventListener('click', function () {
      setupForm.classList.remove('invisible');
    });
    setupClose.addEventListener('click', function () {
      setupForm.classList.add('invisible');
    });
    wizardCoat.addEventListener('click', function () {
      var coatColorRandom = Math.floor(Math.random() * wizardCoatColors.length);
      wizardCoat.style.fill = wizardCoatColors[coatColorRandom];
    });
    wizardEyes.addEventListener('click', function () {
      var eyesColorRandom = Math.floor(Math.random() * wizardEyesColors.length);
      wizardEyes.style.fill = wizardEyesColors[eyesColorRandom];
    });
    wizardFireball.addEventListener('click', function () {
      var fireballColorsRandom = Math.floor(Math.random() * wizardFireballColors.length);
      wizardFireball.style.background = wizardFireballColors[fireballColorsRandom];
    });
    wizardFace.addEventListener('click', function () {
      wizardFace.style.fill = 'rgb(251, 216,' + Math.floor((Math.random() * 8) * 20) + ')';
    })
