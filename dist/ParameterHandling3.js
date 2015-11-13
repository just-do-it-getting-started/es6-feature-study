"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var params = ["hello", true, 7];
var other = [1, 2].concat(params); // [ 1, 2, "hello", true, 7 ]
f.apply(undefined, [1, 2].concat(params)) === 9;

var str = "foo";
var chars = [].concat(_toConsumableArray(str)); // [ "f", "o", "o" ]