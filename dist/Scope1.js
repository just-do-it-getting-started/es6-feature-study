"use strict";

var callbacks = [];

var _loop = function _loop(i) {
	callbacks[i] = function () {
		return i * 2;
	};
};

for (var i = 0; i <= 2; i++) {
	_loop(i);
}
console.log(callbacks[0]() === 0);
console.log(callbacks[1]() === 2);
console.log(callbacks[2]() === 4);