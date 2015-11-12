var getASTNode = () => ({
		op: 1,
		lhs: 2,
		rhs: 3
	});
var { op, lhs, rhs } = getASTNode();

console.log(op, lhs, rhs);