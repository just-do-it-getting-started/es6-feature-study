let callbacks = []
for (let i = 0; i <= 2; i++) {
	callbacks[i] = function () { return i * 2 }
}
console.log(callbacks[0]() === 0);
console.log(callbacks[1]() === 2);
console.log(callbacks[2]() === 4);