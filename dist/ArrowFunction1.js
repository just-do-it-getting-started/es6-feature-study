"use strict";

var odds = evens.map(function (v) {
  return v + 1;
});
var pairs = evens.map(function (v) {
  return { even: v, odd: v + 1 };
});
var nums = evens.map(function (v, i) {
  return v + i;
});