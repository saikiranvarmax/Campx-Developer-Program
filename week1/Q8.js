//Composite functions

var compose = function(functions) {
    return function(x) {
    for(let i =functions.length-1;i>=0;i--){
        var x = functions[i](x);
    };
    return x;
};
};

//Test case
var composit = compose([x => 10 * x, x => 10 * x, x => 10 * x]);
console.log(composit(1));

var composit = compose([x => x + 1, x => x * x, x => 2 * x]);
console.log(composit(4));

var composit = compose([]);
console.log(composit(42));