//Array Reduce Transformation

var reduce = function(nums, fn, init) {
    for(let i =0; i<nums.length;i++){
    init = fn(init, nums[i])
    }
    return init;
};

//Test case
let sum = (accum,curr)=> accum +curr;
let product = (accum,curr)=> accum*curr;
console.log(reduce([1,2,3,4],sum,0));
console.log(reduce([1,2,3,4],product,100));

