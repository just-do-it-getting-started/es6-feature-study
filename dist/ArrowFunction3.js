"use strict";

var something = function something() {
	var _this = this;

	this.nums = [1, 2, 3, 4, 5, 6, 7, 8];
	this.fives = [];
	this.nums.forEach(function (v) {
		if (v % 5 === 0) _this.fives.push(v);
	});
};