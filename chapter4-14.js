function calculatetax(price, taxrate = 0.07 * price){
    return price + taxrate;
}
console.log(calculatetax)(100);