var getASTNode = () => ({
	op: 3,
	lhs: {
		op: 4
	},
	rhs: 5
});
var { op: a, lhs: { op: b }, rhs: c } = getASTNode();

console.log(a===3);
console.log(b===4);
console.log(c===5);