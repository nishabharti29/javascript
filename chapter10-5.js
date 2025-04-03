const animalPrototype = {
    sayName: function() {
        console.log("My name is " + this.name);
    }
};
const lion = Object.create(animalPrototype);
lion.name = "Simba";
lion.sayName();
console.log(Object.getPrototypeOf(lion) === animalPrototype);