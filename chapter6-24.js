matrix.forEach((row, rowIndex) => {
    row.forEach((element, columnIndex) => {
      console.log(`Element at [${rowIndex}][${columnIndex}]: ${element}`);
    });
  });