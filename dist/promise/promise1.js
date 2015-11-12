"use strict";

function msgAfterTimeout(msg, who, timeout) {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			return resolve(msg + " Hello " + who + "!");
		}, timeout);
	});
}
msgAfterTimeout("", "Foo", 100).then(function (msg) {
	return msgAfterTimeout(msg, "Bar", 200);
}).then(function (msg) {
	console.log("done after 300ms:" + msg);
});