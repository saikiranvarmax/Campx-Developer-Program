//Is Object Empty

var isEmpty = function(obj) {
    if (Array.isArray(obj)) {
      return obj.length === 0;
    } else if (typeof obj === 'object' && obj !== null) {
      return Object.keys(obj).length === 0;
    }
    return false;
  };
  
 //Test Case
  
  const example1 = {"x": 5, "y": 42};
  console.log(isEmpty(example1));
  
  
  

