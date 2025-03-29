function exampleConst() {
    // console.log(z)
    const z = 10;
    console.log(z); 
    // const z = 20; 

    const myObject = { value: 1 };
    myObject.value = 2;
    console.log(myObject.value);


    const myArray = [1, 2, 3];
    myArray.push(4);
    console.log(myArray);
    
}

exampleConst();
if (true) {
  const blockConst = "I'm a const in a block";
}
