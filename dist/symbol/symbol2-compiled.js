"use strict";

function _typeof(obj) {
  return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}

Symbol.for("app.foo") === Symbol.for("app.foo");
var foo = Symbol.for("app.foo");
var bar = Symbol.for("app.bar");
Symbol.keyFor(foo) === "app.foo";
Symbol.keyFor(bar) === "app.bar";
(typeof foo === "undefined" ? "undefined" : _typeof(foo)) === "symbol";
(typeof bar === "undefined" ? "undefined" : _typeof(bar)) === "symbol";
var obj = {};
obj[foo] = "foo";
obj[bar] = "bar";
JSON.stringify(obj); // {}
Object.keys(obj); // []
Object.getOwnPropertyNames(obj); // []
Object.getOwnPropertySymbols(obj); // [ foo, bar ]

//# sourceMappingURL=symbol2-compiled.js.map