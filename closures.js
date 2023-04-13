//Example 1
function generate(){
    var num = 1;
    function number(){
        console.log(num);
    }
    num++;
    return number;
}
var numbers = generate();
numbers();//2

//Example 2

function Name(){
    var dum = function (){
        console.log(hi);
    }
    var hi = 'Alok';
    return dum;
}

var Naam = Name();
Naam();// Alok
