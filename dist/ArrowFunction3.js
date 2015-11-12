"use strict";

var something = function something() {
	undefined.nums = [1, 2, 3, 4, 5, 6, 7, 8];
	undefined.fives = [];
	undefined.nums.forEach(function (v) {
		if (v % 5 === 0) undefined.fives.push(v);
	});
};