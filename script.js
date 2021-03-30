function addOrDeleteProp(object, propertyName) {
	// write your code here
	if (object.hasOwnProperty(propertyName)) {
		delete object[propertyName]
		return object
	} else {
		object[propertyName] = 'objects are cool'
	}

	return object
}
