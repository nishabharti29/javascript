const originalBook = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937
  };
  const copiedBook = { ...originalBook };
  copiedBook.year = 1954; 
  
  console.log(originalBook);
  console.log(copiedBook);  
  const additionalInfo = {
    publisher: "Allen & Unwin",
    pages: 310
  };
  const completeBook = { ...originalBook, ...additionalInfo };
  console.log(completeBook);