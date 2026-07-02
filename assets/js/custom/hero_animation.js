(function () {
  "use strict";

  var canvas = document.getElementById("hero-canvas");
  if (!canvas || !canvas.getContext) return;

  var ctx = canvas.getContext("2d");
  var dpr = Math.max(1, window.devicePixelRatio || 1);

  var lineCount = 28;
  var pointsPerLine = 120;
  var phase = 0;
  var rafId = null;

  function setCanvasSize() {
    var rect = canvas.getBoundingClientRect();
    var width = Math.max(1, Math.floor(rect.width));
    var height = Math.max(1, Math.floor(rect.height));

    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function drawFrame() {
    var width = canvas.clientWidth;
    var height = canvas.clientHeight;

    ctx.clearRect(0, 0, width, height);

    for (var i = 0; i < lineCount; i += 1) {
      var t = i / Math.max(1, lineCount - 1);
      var baseY = (t * height * 0.95) + (height * 0.03);
      var amplitude = 10 + (1 - t) * 36;
      var frequency = 1.2 + t * 1.7;
      var speed = 0.65 + t * 0.55;
      var opacity = 0.06 + (1 - t) * 0.22;

      ctx.beginPath();

      for (var p = 0; p <= pointsPerLine; p += 1) {
        var x = (p / pointsPerLine) * width;
        var xNorm = x / Math.max(1, width);

        var y = baseY
          + Math.sin((xNorm * Math.PI * 2 * frequency) + phase * speed) * amplitude
          + Math.cos((xNorm * Math.PI * 4.5) + phase * 0.35 + i * 0.2) * (amplitude * 0.23);

        if (p === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.strokeStyle = "rgba(255, 255, 255, " + opacity.toFixed(3) + ")";
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    phase += 0.012;
    rafId = window.requestAnimationFrame(drawFrame);
  }

  function onVisibilityChange() {
    if (document.hidden) {
      if (rafId !== null) {
        window.cancelAnimationFrame(rafId);
        rafId = null;
      }
      return;
    }

    if (rafId === null) {
      drawFrame();
    }
  }

  setCanvasSize();
  drawFrame();

  window.addEventListener("resize", setCanvasSize);
  document.addEventListener("visibilitychange", onVisibilityChange);
})();
