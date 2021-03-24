function calculator(num1, num2, operation) {
	// return a Promsie
	return new Promise((resolve, reject) => {
		if (operation === '+') {
			resolve(num1 + num2)
		} else if (operation === '-') {
			resolve(num1 - num2)
		} else {
			reject('error')
		}
	})
}

module.exports = calculator
