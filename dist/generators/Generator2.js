"use strict";

var _marked = [range].map(regeneratorRuntime.mark);

function range(start, end, step) {
	return regeneratorRuntime.wrap(function range$(_context) {
		while (1) switch (_context.prev = _context.next) {
			case 0:
				if (!(start < end)) {
					_context.next = 6;
					break;
				}

				_context.next = 3;
				return start;

			case 3:
				start += step;
				_context.next = 0;
				break;

			case 6:
			case "end":
				return _context.stop();
		}
	}, _marked[0], this);
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
	for (var _iterator = range(0, 10, 2)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
		var i = _step.value;

		console.log(i); // 0, 2, 4, 6, 8
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