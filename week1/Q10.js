//Allow once function
var once = function(fn) {
    let called = false;
    return function(...args){
        if(!called){
            called = true;
            return fn(...args);
        }
    }
};

//Test Case
let new_fn = once((a,b,c) => (a + b + c));
console.log(new_fn(1,2,3));
console.log(new_fn(2,3,6));