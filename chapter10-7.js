class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    get description() {
      return `${this.make} ${this.model}`;
    }
    set color(newColor){
        this._color = newColor;
    }
}