//Syntax : arr.some(callback(currentValue), thisArg)

  
let numbers = [1, 3, 2, 5, 4];

function isEven(element) {
    return element % 2 === 0;
  }
  

console.log(numbers.some(isEven));
// Output: true 