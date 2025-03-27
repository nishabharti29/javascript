function square (number) {
    return number * number;
}
const result = square(5);
console.log(result);
function noreturn(){
    console.log("this function doesn't expilicity return anything.");
}
const voidresult = noreturn();

console.log(void result);