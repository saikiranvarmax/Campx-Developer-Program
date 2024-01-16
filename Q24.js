// Sort By

function sortByFn(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
  }
  
  //Test Case
  const arr1 = [5, 4, 1, 2, 3];
  const fn1 = (x) => x;
  const sortedArr1 = sortByFn(arr1, fn1);
  console.log(sortedArr1);

