//Example 1-

const mod = {
    x : 42,
    getX : function (){
        return this.getX;
    }
};

const dum = mod.getX;
console.log(dum); // function is in global scope invoked
//output : undefined

const x = dum.bind(mod);
console.log(x);
// output - 42

//Example 2-

class base {
    constructor (...args){
        console.log (new.target === base);
        console.log(args);
    }
}

const Boundbase = base.bind(null, 1 ,2);
new Boundbase(3,4);// true , [1,2,3,4]