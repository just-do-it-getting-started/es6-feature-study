"use strict";

function f(x, y) {
	for (var _len = arguments.length, a = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
		a[_key - 2] = arguments[_key];
	}

	return (x + y) * a.length;
}
f(1, 2, "hello", true, 7) === 9;