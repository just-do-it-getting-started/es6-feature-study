"use strict";

function _classCallCheck(instance, Constructor) {
	if (!(instance instanceof Constructor)) {
		throw new TypeError("Cannot call a class as a function");
	}
}

function _possibleConstructorReturn(self, call) {
	if (!self) {
		throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	}return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
	if (typeof superClass !== "function" && superClass !== null) {
		throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
	}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var Rectangle = (function (_Shape) {
	_inherits(Rectangle, _Shape);

	function Rectangle(id, x, y, width, height) {
		_classCallCheck(this, Rectangle);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this, id, x, y));

		_this.width = width;
		_this.height = height;
		return _this;
	}

	return Rectangle;
})(Shape);

var Circle = (function (_Shape2) {
	_inherits(Circle, _Shape2);

	function Circle(id, x, y, radius) {
		_classCallCheck(this, Circle);

		var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, id, x, y));

		_this2.radius = radius;
		return _this2;
	}

	return Circle;
})(Shape);

//# sourceMappingURL=Class2-compiled.js.map