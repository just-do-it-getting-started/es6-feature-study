var something = function() {
	this.nums = [1,2,3,4,5,6,7,8]
	this.fives = []
	this.nums.forEach((v) => {
		if (v % 5 === 0)
			this.fives.push(v)
	})
}

