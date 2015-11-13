"use strict";

function _typeof(obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

Symbol("foo") !== Symbol("foo");
var foo = Symbol();
var bar = Symbol();
(typeof foo === "undefined" ? "undefined" : _typeof(foo)) === "symbol";
(typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "symbol";
var obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
JSON.stringify(obj); // {}
Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [ foo, bar ]

//# sourceMappingURL=symbol1-compiled.js.map