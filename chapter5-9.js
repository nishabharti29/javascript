const product = {
    id: 123,
    name: "Laptop",
    price: 1200,
    category: "Electronics"
  };
  
  
  const { id, name, price } = product;
  
  console.log(id);  
  console.log(name);  
  console.log(price); 
  
  
  const {name: productName, price: productPrice} = product;
  console.log(productName); 
  console.log(productPrice);
  
  
  const {discount = 0.1} = product;
  console.log(discount) 