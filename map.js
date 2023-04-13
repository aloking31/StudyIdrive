//Example 1-

let arr = [ 1,2,3,4,5];
let modArr = arr.map(function (element){
    return element*3;
});

console.log(modArr); //[3,6,9,12,15]

// Example 2-

let users = [
    {firstName : "Alok", lastName: "Singh"},
    {firstName : "Akash", lastName: "Singh"},
    {firstName : "Akshay", lastName: "Kumar"}
  ];
  
  let userFullnames = users.map(function(element){
      return `${element.firstName} ${element.lastName}`;
  })
  
  console.log(userFullnames);
  // ["Alok Singh", "Akash Singh", "Akshay Kumar"]