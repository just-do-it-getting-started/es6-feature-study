"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

foo = function () {
	return "something";
};
var obj = _defineProperty({
	foo: "bar"
}, "prop_" + foo(), 42);