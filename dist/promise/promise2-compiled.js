"use strict";

var _slicedToArray = (function () {
	function sliceIterator(arr, i) {
		var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
			for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
				_arr.push(_s.value);if (i && _arr.length === i) break;
			}
		} catch (err) {
			_d = true;_e = err;
		} finally {
			try {
				if (!_n && _i["return"]) _i["return"]();
			} finally {
				if (_d) throw _e;
			}
		}return _arr;
	}return function (arr, i) {
		if (Array.isArray(arr)) {
			return arr;
		} else if (Symbol.iterator in Object(arr)) {
			return sliceIterator(arr, i);
		} else {
			throw new TypeError("Invalid attempt to destructure non-iterable instance");
		}
	};
})();

function fetchAsync(url, timeout, onData, onError) {
	setTimeout(onData(1), 1000);
}
var fetchPromised = function fetchPromised(url, timeout) {
	return new Promise(function (resolve, reject) {
		fetchAsync(url, timeout, resolve, reject);
	});
};
Promise.all([fetchPromised("http://backend/foo.txt", 500), fetchPromised("http://backend/bar.txt", 500), fetchPromised("http://backend/baz.txt", 500)]).then(function (data) {
	var _data = _slicedToArray(data, 3);

	var foo = _data[0];
	var bar = _data[1];
	var baz = _data[2];

	console.log("success: foo=" + foo + " bar=" + bar + " baz=" + baz);
}, function (err) {
	console.log("error: " + err);
});

//# sourceMappingURL=promise2-compiled.js.map