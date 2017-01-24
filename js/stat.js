'use strict';

var renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(120, 30, 320, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 320, 270);
  ctx.fillRect(100, 10, 320, 270);

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Статистика результатов:', 120, 60);

  var max = -1;
  var time = 0;

  for (var i = 0; i < times.length; i++) {
    time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var histoHeight = -150;
  var histoX = 140;
  var step = histoHeight / max;
  if (!isFinite(step)) {
    step = 1;
  }
  var columnIndent = 50;

  for (i = 0; i < times.length; i++) {
    var name = names[i];
    time = times[i];

    var height = step * time;
    ctx.translate(0, height);
    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 245);
    ctx.translate(0, -height);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0 ', ((Math.random() * 7) * 61).toFixed(0), ' 0.88)'];
    }

    ctx.fillRect(histoX + columnIndent * i, 250, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 315);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Кекс', 'Катя', 'Игорь', 'Вы'], [40.25, 12.44, 13.39, 27.25]);
