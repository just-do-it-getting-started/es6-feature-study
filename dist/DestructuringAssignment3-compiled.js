"use strict";

var getASTNode = function getASTNode() {
	return {
		op: 3,
		lhs: {
			op: 4
		},
		rhs: 5
	};
};

var _getASTNode = getASTNode();

var a = _getASTNode.op;
var b = _getASTNode.lhs.op;
var c = _getASTNode.rhs;

console.log(a === 3);
console.log(b === 4);
console.log(c === 5);

//# sourceMappingURL=DestructuringAssignment3-compiled.js.map