//Array wraper 

class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }

    toString() {
        return `[${this.nums.join(',')}]`;
    }
}

// Test Case
const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];
const obj1 = new ArrayWrapper(nums1);
const obj2 = new ArrayWrapper(nums2);

const result = obj1 + obj2;

console.log(result); // Output: 21





