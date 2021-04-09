function getMathModule(x) {
  // declare the local variable 'y'
  const y = 5;
  //return an object with the following functions: sum, subtract, multiply, divide
  return {
    sum: () => x + y,
    subtract: () => x - y,
    multiply: () => x * y,
    divide: () => x / y,
  };
}

console.log(getMathModule(5).divide());
