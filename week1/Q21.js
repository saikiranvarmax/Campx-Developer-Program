// Chunk Array

var chunk = function(arr, size) {
    if (size <= 0) {
      return [];
    }
  
    const result = [];
    let index = 0;
  
    while (index < arr.length) {
      result.push(arr.slice(index, index + size));
      index += size;
    }
  
    return result;
  };
  
 //Test Case
  
  const example1 = [1, 2, 3, 4, 5];
  console.log(chunk(example1, 1));