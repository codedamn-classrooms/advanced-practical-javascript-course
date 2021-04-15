function fn(customPromise) {
	// return a new Promsie which resolves to + 1 of the resolved promise value
	return customPromise.catch(() => 'error')
}

module.exports = fn
