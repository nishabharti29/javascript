class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    startEngine() {
        console.log("Engine started");
    }
    static getDefaultColor() {
        return "White";
    }
    get description() {
      return `${this.make} ${this.model}`;
    }
    set color(newColor){
        this._color = newColor;
    }
}
const myCar = new Vehicle("Toyota", "Camry");
myCar.startEngine();
console.log(Vehicle.getDefaultColor());

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
const myCar2 = new Car("Honda", "Civic", 4);
myCar2.startEngine();


myCar2.honk();

console.log(myCar2.description);

myCar2.color = "red";
console.log(myCar2._color); 