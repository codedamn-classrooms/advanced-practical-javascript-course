/**
 * Returns an array of doubled value of the resolved values of the promises
 * @param  {...any} promises
 * @returns {Array}
 */
async function fn(...promises) {
	// resolve all the promises and returned the doubled value of each Promise
}

// Don't change this line - test cases need the function to be exported
module.exports = fn;

// Sample Tests
fn(Promise.resolve(2), Promise.resolve(4)).then((data) => console.log(data)); // should return [4,6,8]
fn(Promise.resolve(2)).then((data) => console.log(data)); // should return [4]
// fn(Promise.reject(), Promise.resolve(5)).then((data) => console.log(data)); // should throw an error
