//Join Two Arrays by ID

const join = (arr1, arr2) => {
    const result = {}
    for(const item of arr1)
        result[item.id] = item

    for(const item of arr2){
        if(item.id in result)
            for(const key in item) result[item.id][key] = item[key]
        else
            result[item.id] = item
    }
    return Object.values(result)
};

const assert = require('assert');

// Test Case 1
const arr1 = [
  { "id": 1, "x": 1 },
  { "id": 2, "x": 9 }
];

const arr2 = [
  { "id": 3, "x": 5 }
];

const result1 = join(arr1, arr2);
const expected1 = [
  { "id": 1, "x": 1 },
  { "id": 2, "x": 9 },
  { "id": 3, "x": 5 }
];

assert.deepStrictEqual(result1, expected1, 'Test Case 1 Failed');