//Filter Elements from Array

var filter = function(arr, fn) {
    const filterdata = arr.filter(fn);
    return filterdata;
};

// Test cases
const arr1 = [0, 10, 20, 30];
const fn1 = function greaterThan10(n) { return n > 10; };
console.log(filter(arr1, fn1)); 

const arr2 = [1, 2, 3];
const fn2 = function firstIndex(n, i) { return i === 0; };
console.log(filter(arr2, fn2));



