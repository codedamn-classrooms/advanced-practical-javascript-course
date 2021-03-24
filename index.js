function fn(...promises) {
	// resolve them all
	// add one to all of them
	return Promise.all(promises).then((res) => res.map((t) => t * 2))
}

module.exports = fn
