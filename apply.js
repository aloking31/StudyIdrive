//Example 1-

const numbers = [1,2,3,4,5];

const max = Math.max.apply(null , numbers);
console.log(max); // 5

const min = Math.min.apply(null , numbers);
console.log (min);// 1

//Example 2-

const array = ["a" , "b"];
const elements = [1,2,3];

array.push.apply(array , elements);
console.log(array); // ["a", "b",1,2,3]