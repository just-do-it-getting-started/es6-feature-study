"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
	value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isMarked = new WeakSet();
var attachedData = new WeakMap();

var Node = exports.Node = (function () {
	function Node(id) {
		_classCallCheck(this, Node);

		this.id = id;
	}

	_createClass(Node, [{
		key: "mark",
		value: function mark() {
			isMarked.add(this);
		}
	}, {
		key: "unmark",
		value: function unmark() {
			isMarked.delete(this);
		}
	}, {
		key: "marked",
		value: function marked() {
			return isMarked.has(this);
		}
	}, {
		key: "data",
		set: function set(data) {
			attachedData.set(this, data);
		},
		get: function get() {
			return attachedData.get(this);
		}
	}]);

	return Node;
})();

var foo = new Node("foo");

JSON.stringify(foo) === '{"id":"foo"}';
foo.mark();
foo.data = "bar";
foo.data === "bar";
JSON.stringify(foo) === '{"id":"foo"}';

isMarked.has(foo) === true;
attachedData.has(foo) === true;
foo = null; /* remove only reference to foo */
attachedData.has(foo) === false;
isMarked.has(foo) === false;