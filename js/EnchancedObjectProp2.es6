foo = () => "something"
let obj = {
	foo: "bar",
	[ "prop_" + foo() ]: 42
}