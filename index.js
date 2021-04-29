function fn(customPromise) {
	// return a new Promsie which resolves to + 1 of the resolved promise value
	return customPromise.then((value) => {
		return value + 1
	})
}

module.exports = fn
