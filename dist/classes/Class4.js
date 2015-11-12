"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Shape = (function () {
	function Shape(id, x, y) {
		_classCallCheck(this, Shape);

		this.id = id;
		this.move(x, y);
	}

	_createClass(Shape, [{
		key: "move",
		value: function move(x, y) {
			this.x = x;
			this.y = y;
		}
	}, {
		key: "toString",
		value: function toString() {
			return "Shape(" + this.id + ")";
		}
	}]);

	return Shape;
})();

var Rectangle = (function (_Shape) {
	_inherits(Rectangle, _Shape);

	function Rectangle(id, x, y, width, height) {
		_classCallCheck(this, Rectangle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).call(this, id, x, y));
	}

	_createClass(Rectangle, [{
		key: "toString",
		value: function toString() {
			return "Rectangle > " + _get(Object.getPrototypeOf(Rectangle.prototype), "toString", this).call(this);
		}
	}]);

	return Rectangle;
})(Shape);

var Circle = (function (_Shape2) {
	_inherits(Circle, _Shape2);

	function Circle(id, x, y, radius) {
		_classCallCheck(this, Circle);

		return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).call(this, id, x, y));
	}

	_createClass(Circle, [{
		key: "toString",
		value: function toString() {
			return "Circle > " + _get(Object.getPrototypeOf(Circle.prototype), "toString", this).call(this);
		}
	}]);

	return Circle;
})(Shape);