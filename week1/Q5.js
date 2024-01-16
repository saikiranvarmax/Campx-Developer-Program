//Apply Transform Over Each Element in Array

var map = function(arr, fn) {
    for(var i=0;i<arr.length;i++){
        let new_valu = fn(arr[i],i);
       arr[i] = new_valu;
    };
    return arr; 
};

//Test case
var sum_one = (a,b)=> a+1;
var sum = (a,b)=> a+b;
var product = (a,b)=>a*b;
transform = map([1,2,3],sum);
console.log(transform);

transform = map([1,2,3],sum_one);
console.log(transform)

transform = map([1,2,3],product);
console.log(transform)