'use strict';

obj = {
	foo: function foo(a, b) {
		console.log('foo');
	},
	bar: function bar(x, y) {
		console.log('bar');
	},
	quux: regeneratorRuntime.mark(function quux(x, y) {
		return regeneratorRuntime.wrap(function quux$(_context) {
			while (1) switch (_context.prev = _context.next) {
				case 0:
					console.log('quxx');

				case 1:
				case 'end':
					return _context.stop();
			}
		}, quux, this);
	})
};

//# sourceMappingURL=EnchancedObjectProp3-compiled.js.map