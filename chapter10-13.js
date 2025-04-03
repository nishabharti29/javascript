class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
        this.speed = 0;
    }
    accelerate(increment) {
        this.speed += increment;
        console.log(`Accelerating to ${this.speed} mph`);
    }
    brake(decrement) {
        this.speed -= decrement;
        if (this.speed < 0) {
            this.speed = 0;
        }
        console.log(`Braking to ${this.speed} mph`);
    }
    getDescription() {
        return `${this.make} ${this.model}. Current speed: ${this.speed} mph`;
    }
}
class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model);
        this.numDoors = numDoors;
    }
    honk() {
        console.log("Honk!");
    }
    getDescription() {
        return `${super.getDescription()} . Number of doors: ${this.numDoors}`;
    }
}
const genericVehicle = new Vehicle("Generic", "Vehicle");
const myCar = new Car("Honda", "Civic", 4);
console.log(genericVehicle.getDescription());
console.log(myCar.getDescription());