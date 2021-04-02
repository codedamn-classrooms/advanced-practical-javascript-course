function fn(...promises) {
	// resolve them all

	return Promise.allSettled(promises).then((resolvedRejectedValues) => {
		const values = []
		resolvedRejectedValues.forEach((promise) => {
			if (promise.status === 'fulfilled') {
				values.push(promise.value * 2)
			} else {
				values.push(null)
			}
		})

		return values
	})
}

module.exports = fn
