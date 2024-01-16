// Flatten Deeply Nested Array

const flat = function (arr, n) {
    if (n === 0)
        return arr;
    let res = [];
    for (let i in arr) {
        if (Array.isArray(arr[i]))
            res.push(...flat(arr[i], n - 1));
        else
            res.push(arr[i]);
    }
    return res;
}

// Test Case
const inputArray = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const depth = 2;

const result = flat(inputArray, depth);

console.log(result);
