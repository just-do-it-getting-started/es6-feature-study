"use strict";

var getASTNode = function getASTNode() {
		return {
				op: 1,
				lhs: 2,
				rhs: 3
		};
};

var _getASTNode = getASTNode();

var op = _getASTNode.op;
var lhs = _getASTNode.lhs;
var rhs = _getASTNode.rhs;

console.log(op, lhs, rhs);

//# sourceMappingURL=DestructuringAssignment2-compiled.js.map