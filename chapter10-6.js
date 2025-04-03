class Car extends Vehicle {
    constructor(make, model, numDoors) {
        super(make, model);
        this.numDoors = numDoors;
    }
    honk() {
        console.log("Honk!");
    }
    startEngine() {
        super.startEngine();
        console.log("Car engine started");
    }
}