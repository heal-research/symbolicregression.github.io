(function () {
	"use strict";

	var canvas = document.getElementById("hero-canvas");
	if (!canvas || !canvas.getContext) return;

	var ctx = canvas.getContext("2d");
	var dpr = Math.max(1, window.devicePixelRatio || 1);

	var xMin = 0;
	var xMax = 7;
	var yMin = -1;
	var yMax = 3;
	var xStep = 0.05;
	var traceCount = 30;
	var traceRevealDelayMs = 50;
	var lineWidth = 1.5;
	var margins = {
		l: 0,
		r: 0,
		b: 100,
		t: 100,
		pad: 4
	};

	var traces = [];
	var visibleTraceCount = 1;
	var revealStartAt = null;
	var rafId = null;

	function clamp(value, min, max) {
		return Math.max(min, Math.min(max, value));
	}

	function generateXValues() {
		var values = [];
		for (var x = xMin; x <= xMax + 1e-9; x += xStep) {
			values.push(x);
		}
		return values;
	}

	function generateTraceData() {
		var xValues = generateXValues();
		var generated = [];

		for (var i = 0; i < traceCount; i += 1) {
			var a = Math.random() * 0.5;
			var b = Math.random() * 0.5;
			var c = Math.random() * 0.5;
			var yValues = [];

			for (var j = 0; j < xValues.length; j += 1) {
				yValues.push(a + Math.sin(b + xValues[j]) + c);
			}

			var opacity = ((Math.abs(a) + Math.abs(b) + Math.abs(c)) / 1.5) - 0.15;

			generated.push({
				x: xValues,
				y: yValues,
				opacity: clamp(opacity, 0, 1)
			});
		}

		return generated;
	}

	function setCanvasSize() {
		var rect = canvas.getBoundingClientRect();
		var width = Math.max(1, Math.floor(rect.width));
		var height = Math.max(1, Math.floor(rect.height));

		canvas.width = Math.floor(width * dpr);
		canvas.height = Math.floor(height * dpr);
		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	}

	function toCanvasCoordinates(x, y, width, height) {
		var plotLeft = margins.l + margins.pad;
		var plotRight = width - margins.r - margins.pad;
		var plotTop = margins.t + margins.pad;
		var plotBottom = height - margins.b - margins.pad;

		if (plotBottom <= plotTop) {
			plotTop = margins.pad;
			plotBottom = height - margins.pad;
		}

		var xSpan = Math.max(1e-9, xMax - xMin);
		var ySpan = Math.max(1e-9, yMax - yMin);
		var px = plotLeft + ((x - xMin) / xSpan) * (plotRight - plotLeft);
		var py = plotBottom - ((y - yMin) / ySpan) * (plotBottom - plotTop);

		return { x: px, y: py };
	}

	function drawSmoothTrace(points) {
		if (points.length < 2) return;

		ctx.beginPath();
		ctx.moveTo(points[0].x, points[0].y);

		for (var i = 0; i < points.length - 1; i += 1) {
			var p0 = i === 0 ? points[i] : points[i - 1];
			var p1 = points[i];
			var p2 = points[i + 1];
			var p3 = i + 2 < points.length ? points[i + 2] : p2;

			var cp1x = p1.x + (p2.x - p0.x) / 6;
			var cp1y = p1.y + (p2.y - p0.y) / 6;
			var cp2x = p2.x - (p3.x - p1.x) / 6;
			var cp2y = p2.y - (p3.y - p1.y) / 6;

			ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, p2.x, p2.y);
		}

		ctx.stroke();
	}

	function drawVisibleTraces() {
		var width = canvas.clientWidth;
		var height = canvas.clientHeight;

		ctx.clearRect(0, 0, width, height);

		var maxVisible = Math.min(visibleTraceCount, traces.length);
		for (var i = 0; i < maxVisible; i += 1) {
			var trace = traces[i];
			var points = [];

			for (var j = 0; j < trace.x.length; j += 1) {
				points.push(toCanvasCoordinates(trace.x[j], trace.y[j], width, height));
			}

			ctx.strokeStyle = "rgba(255, 255, 255, " + trace.opacity.toFixed(2) + ")";
			ctx.lineWidth = lineWidth;
			drawSmoothTrace(points);
		}
	}

	function drawFrame(timestamp) {
		if (revealStartAt === null) {
			revealStartAt = timestamp;
		}

		var elapsed = timestamp - revealStartAt;
		var shouldShow = 1 + Math.floor(elapsed / traceRevealDelayMs);
		var nextVisibleCount = Math.min(traces.length, shouldShow);

		if (nextVisibleCount !== visibleTraceCount) {
			visibleTraceCount = nextVisibleCount;
		}

		drawVisibleTraces();

		if (visibleTraceCount >= traces.length) {
			rafId = null;
			return;
		}

		rafId = window.requestAnimationFrame(drawFrame);
	}

	function startReveal() {
		if (rafId !== null || visibleTraceCount >= traces.length) {
			return;
		}

		revealStartAt = null;
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

		startReveal();
	}

	traces = generateTraceData();
	setCanvasSize();
	drawVisibleTraces();
	startReveal();

	window.addEventListener("resize", function () {
		setCanvasSize();
		drawVisibleTraces();
	});
	document.addEventListener("visibilitychange", onVisibilityChange);
})();
