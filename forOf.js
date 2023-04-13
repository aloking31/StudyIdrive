//Syntax : for (variable of iterable){statement}

//Example 1-

const iterable = [1,2,3,4,5];

for (let value of iterable){
    value = value + 1;
    console.log(value);
}

//output : 2
//3
//4
//5
//6

//Example 2-

const iter = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);
  
  for (const entry of iter) {
    console.log(entry);
  }
  //output : ['a', 1]
  // ['b', 2]
  // ['c', 3]
  
  for (const [key, value] of iter) {
    console.log(value);
  }
  //output : 1
  // 2
  // 3