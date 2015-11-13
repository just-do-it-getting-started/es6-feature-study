"use strict";

var parser = function parser(input, match) {
	for (var pos = 0, lastPos = input.length; pos < lastPos;) {
		for (var i = 0; i < match.length; i++) {
			match[i].pattern.lastIndex = pos;
			var found = undefined;
			if ((found = match[i].pattern.exec(input)) !== null) {
				match[i].action(found);
				pos = match[i].pattern.lastIndex;
				break;
			}
		}
	}
};

var report = function report(match) {
	console.log(JSON.stringify(match));
};
parser("Foo 1 Bar 7 Baz 42", [{ pattern: /^Foo\s+(\d+)/g, action: function action(match) {
		return report(match);
	} }, { pattern: /^Bar\s+(\d+)/g, action: function action(match) {
		return report(match);
	} }, { pattern: /^Baz\s+(\d+)/g, action: function action(match) {
		return report(match);
	} }, { pattern: /^\s*/g, action: function action(match) {} }]);

//# sourceMappingURL=EnchancedRegExp-compiled.js.map