"use strict";

var _createClass = (function () {
	function defineProperties(target, props) {
		for (var i = 0; i < props.length; i++) {
			var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
		}
	}return function (Constructor, protoProps, staticProps) {
		if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	};
})();

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

var Rectangle = (function () {
	function Rectangle(width, height) {
		_classCallCheck(this, Rectangle);

		this._width = width;
		this._height = height;
	}

	_createClass(Rectangle, [{
		key: "width",
		set: function set(width) {
			this._width = width;
		},
		get: function get() {
			return this._width;
		}
	}, {
		key: "height",
		set: function set(height) {
			this._height = height;
		},
		get: function get() {
			return this._height;
		}
	}, {
		key: "area",
		get: function get() {
			return this._width * this._height;
		}
	}]);

	return Rectangle;
})();

var r = new Rectangle(50, 20);
console.log(r.area === 1000);

//# sourceMappingURL=Class6-compiled.js.map