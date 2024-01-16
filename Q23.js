//Group By

Array.prototype.groupBy = function(fn) {
    const groupedObject = {};
  
    for (const item of this) {
     
      const key = fn(item);
  
      if (!groupedObject[key]) {
        groupedObject[key] = [item];
      } else {
        
        groupedObject[key].push(item);
      }
    }
  
    return groupedObject;
  };
  
  //Test Case

  const array1 = [
    {"id":"1"},
    {"id":"1"},
    {"id":"2"}
  ];
  const fn1 = function(item) { 
    return item.id; 
  };
  console.log(array1.groupBy(fn1));
