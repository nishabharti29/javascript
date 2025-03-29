class Person {
    constructor(name) {
      this.name = name;
    }
  }
  
  const person1 = new Person("Bob");
  const arr = [1,2,3];
  
  console.log(person1 instanceof Person);
  console.log(arr instanceof Array);
  console.log(arr instanceof Object);