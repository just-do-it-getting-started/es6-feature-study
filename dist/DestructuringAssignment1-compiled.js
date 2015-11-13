"use strict"

// issue: different result when missing semicolon

;
var list = [1, 2, 3];
var a = list[0];
var b = list[2];
var _ref = [a, b];
b = _ref[0];
a = _ref[1];
_ref;

//# sourceMappingURL=DestructuringAssignment1-compiled.js.map