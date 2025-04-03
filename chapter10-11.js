class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.error("Radius must be positive");
        }
    }
    get area() {
        return Math.PI * this._radius * this._radius;
    }
}
const myCircle = new Circle(5);
console.log(myCircle.radius);
myCircle.radius = 10;
console.log(myCircle.radius);
myCircle.radius = -1;
console.log(myCircle.area);