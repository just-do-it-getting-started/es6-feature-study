"use strict";

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

//  generic asynchronous control-flow driver
function async(proc) {
	for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		params[_key - 1] = arguments[_key];
	}

	var iterator = proc.apply(undefined, params);
	return new Promise(function (resolve, reject) {
		var loop = function loop(value) {
			var result = undefined;
			try {
				result = iterator.next(value);
			} catch (err) {
				reject(err);
			}
			if (result.done) resolve(result.value);else if (_typeof(result.value) === "object" && typeof result.value.then === "function") result.value.then(function (value) {
				loop(value);
			}, function (err) {
				reject(err);
			});else loop(result.value);
		};
		loop();
	});
}

//  application-specific asynchronous builder
function makeAsync(text, after) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			return resolve(text);
		}, after);
	});
}

//  application-specific asynchronous procedure
async(regeneratorRuntime.mark(function _callee(greeting) {
	var foo, bar, baz;
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
				_context.next = 2;
				return makeAsync("foo", 300);

			case 2:
				foo = _context.sent;
				_context.next = 5;
				return makeAsync("bar", 200);

			case 5:
				bar = _context.sent;
				_context.next = 8;
				return makeAsync("baz", 100);

			case 8:
				baz = _context.sent;
				return _context.abrupt("return", greeting + " " + foo + " " + bar + " " + baz);

			case 10:
			case "end":
				return _context.stop();
		}
	}, _callee, this);
}), "Hello").then(function (msg) {
	console.log("RESULT:", msg); // "Hello foo bar baz"
});