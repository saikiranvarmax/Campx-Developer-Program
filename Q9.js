//Length of the arguments

var argumentsLength = function(...args) {
    var i = 0;
    while(args[i]!==undefined){
        i++;
    }
    return i;
    
};

//Test Case
console.log(argumentsLength(5));
console.log(argumentsLength({},4,"3"));



