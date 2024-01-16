//memoization

function memoize(fn) {
    const memo = {};
    const callCount = { count: 0 };

    const memoizedFn = function (...args) {
        const key = JSON.stringify(args);

        if (args.length > 0 && args.every(arg => typeof arg === 'number')) {
            if (!memo[key]) {
                callCount.count++;
                memo[key] = fn(...args);
            }

            return memo[key];
        }

        if (args.length === 0) {
            if (fn.name === 'getCallCount') {
                return callCount.count;
            }
        }

        return 'Invalid input';
    };

    memoizedFn.getCallCount = function () {
        return callCount.count;
    };

    return memoizedFn;
}

const sum = (a, b) => a + b;
const memoizedSum = memoize(sum);

//Test Case
console.log(memoizedSum(2, 2)); 
console.log(memoizedSum(2, 2)); 
console.log(memoizedSum(1, 2)); 
console.log(memoizedSum.getCallCount());
