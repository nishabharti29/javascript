function exampleVar() {
    console.log(x);
    var x = 10;
    console.log(x);
    var x = 20;
    x = 30;
    console.log(x);

}
exampleVar();

if (true) {
    var globalVar = "I'm a Var in a block";
}
console.log(globalvar);