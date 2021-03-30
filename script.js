// write your code here
function Car(fuel) {
	this.fuel = fuel
}

Car.prototype.weather = 0
Car.prototype.getDistanceCarCanTravel = function () {
	if (this.weather === 0) {
		return this.fuel * 10
	} else if (this.weather === 1) {
		return this.fuel * 5
	} else {
		return this.fuel * 2
	}
}
