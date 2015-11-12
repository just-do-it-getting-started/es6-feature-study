"use strict";

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

function f(_ref) {
	var _ref2 = _slicedToArray(_ref, 2);

	var name = _ref2[0];
	var val = _ref2[1];

	console.log(name, val);
}
function g(_ref3) {
	var n = _ref3.name;
	var v = _ref3.val;

	console.log(n, v);
}
function h(_ref4) {
	var name = _ref4.name;
	var val = _ref4.val;

	console.log(name, val);
}
f(["bar", 42]);
g({ name: "foo", val: 7 });
h({ name: "bar", val: 42 });