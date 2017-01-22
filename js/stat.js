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
  var min = Infinity;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
    if (time < min) {
      min = time;
    }
  }

  min = 0;
  var histoHeight = 150;
  var histoX = 140;
  var step = histoHeight / (max - min);
  var columnIndent = 50;

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];

    var height = step * (time - min);

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, histoHeight - 60);

    if (name === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = ['rgba(0, 0 ', ((Math.random() * 7) * 61).toFixed(0), ' 0.88)'];
    }

    ctx.fillRect(histoX + columnIndent * i, 100, 40, height);
    ctx.fillStyle = '#000';
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }
};

var canvas = document.querySelector('canvas');
renderStatistics(canvas.getContext('2d'), ['Кекс', 'Катя', 'Игорь', 'Вы'], [40.25, 12.44, 13.39, 27.25]);
