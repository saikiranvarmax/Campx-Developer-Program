//Array Prototype Last
if (!Array.prototype.last) {
    Array.prototype.last = function() {
      
      if (this.length === 0) {
        return -1; 
      } else {
        return this[this.length - 1]; 
      }
    };
  }
  
  //Test Case
  const numsWithElements = [null, {}, 3];
  console.log(numsWithElements.last()); 
  
  const numsWithoutElements = [];
  console.log(numsWithoutElements.last()); 
  

