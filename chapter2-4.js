const mySymbol =Symbol("description");
const anotherSymbol = Symbol("descriptioin");
console.log(mysymbol === anothersymbol);
const person ={
    [mysymbol]: "Scret value"
};
console.log(person[mySymbol]);