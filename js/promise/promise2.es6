function fetchAsync (url, timeout, onData, onError) {
	setTimeout(onData(1), 1000);
}
let fetchPromised = (url, timeout) => {
	return new Promise((resolve, reject) => {
		fetchAsync(url, timeout, resolve, reject);
	});
}
Promise.all([
	fetchPromised("http://backend/foo.txt", 500),
	fetchPromised("http://backend/bar.txt", 500),
	fetchPromised("http://backend/baz.txt", 500)
]).then((data) => {
	let [ foo, bar, baz ] = data;
	console.log(`success: foo=${foo} bar=${bar} baz=${baz}`);
}, (err) => {
	console.log(`error: ${err}`);
});