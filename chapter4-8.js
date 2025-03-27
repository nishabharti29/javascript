function outerfunction() {
    let outerVar = "hello from outer!";
    function innerFunction() {
        console.log(outerVar);
}
return ineerFunction;
}
const myinnerFunction = outerFunction();
myinnerfunction();