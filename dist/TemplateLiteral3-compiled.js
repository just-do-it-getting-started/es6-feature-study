"use strict";

var _templateObject = _taggedTemplateLiteral(["foo\n", "bar"], ["foo\\n", "bar"]);

function _taggedTemplateLiteral(strings, raw) {
	return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

function quux(strings) {
	strings[0] === "foo\n";
	strings[1] === "bar";
	strings.raw[0] === "foo\\n";
	strings.raw[1] === "bar";
	arguments[1] === 42;
}
quux(_templateObject, 42);

String.raw(_templateObject, 42) === "foo\\n42bar";

//# sourceMappingURL=TemplateLiteral3-compiled.js.map