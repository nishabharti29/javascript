function Animal(name) {
    this.name = name;
}

Animal.prototype.sayName = function() {
    console.log("My name is " + this.name);
};
const dog = new Animal("Buddy");
dog.sayName();
Object.prototype.logPrototype = function() {
  console.log("Object Prototype Method");
}
dog.logPrototype();
console.log(Object.getPrototypeOf(dog) === Animal.prototype);
Animal.prototype.type = "Animal";
console.log(dog.type);

const cat = new Animal("Whiskers");
console.log(cat.type);