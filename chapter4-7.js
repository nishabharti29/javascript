let globalVar = "I am global";
function myfunction() {
    let functionVar = "i am function-scoped";
    console.log(globalVar);
    console.log(functionVar);
}
if (true) {
    let blockVar = "I am blocked-scoped";
    console.log(blockVar);
}
if (true) {
    let secondVar = "I am block-scope 2";
    console.log(secondVar);
}
myfunction();
console.log(globalVar);
