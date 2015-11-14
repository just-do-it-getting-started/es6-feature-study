"use strict";

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

var fibonacci = regeneratorRuntime.mark(function fibonacci(numbers) {
	var pre, cur, _ref;

	return regeneratorRuntime.wrap(function fibonacci$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
				pre = 0, cur = 1;

			case 1:
				if (!(numbers-- > 0)) {
					_context.next = 9;
					break;
				}

				_ref = [cur, pre + cur];
				pre = _ref[0];
				cur = _ref[1];
				_context.next = 7;
				return cur;

			case 7:
				_context.next = 1;
				break;

			case 9:
			case "end":
				return _context.stop();
		}
	}, fibonacci, this);
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = fibonacci(1000)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var n = _step.value;

		console.log(n);
	}
} catch (err) {
	_didIteratorError = true;
	_iteratorError = err;
} finally {
	try {
		if (!_iteratorNormalCompletion && _iterator.return) {
			_iterator.return();
		}
	} finally {
		if (_didIteratorError) {
			throw _iteratorError;
		}
	}
}

var numbers = [].concat(_toConsumableArray(fibonacci(1000)));

var _fibonacci = fibonacci(1000);

var _fibonacci2 = _toArray(_fibonacci);

var n1 = _fibonacci2[0];
var n2 = _fibonacci2[1];
var n3 = _fibonacci2[2];

var others = _fibonacci2.slice(3);