"use strict";

{
	var foo = function foo() {
		return 1;
	};

	foo() === 1;
	{
		var _foo = function _foo() {
			return 2;
		};

		_foo() === 2;
	}
	foo() === 1;
}