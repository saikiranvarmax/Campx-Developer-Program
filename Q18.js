//Debounce
class DebouncedFunction {
    constructor(fn, delay) {
      this.fn = fn;
      this.delay = delay;
      this.timer = null;
    }
  
    call(...args) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
  
      return new Promise((resolve) => {
        this.timer = setTimeout(() => {
          const result = this.fn(...args);
          resolve(result);
        }, this.delay);
      });
    }
  }
  
  function debounce(fn, delay) {
    const debouncedFn = new DebouncedFunction(fn, delay);
  
    return async function (...args) {
      return debouncedFn.call(...args);
    };
  }
  
  // Test Case
  
  let start = Date.now();
  
  function log(...inputs) {
    console.log([Date.now() - start, inputs]);
  }
  
  const dlog = debounce(log, 50);
  
  setTimeout(() => dlog(1), 50);
  setTimeout(() => dlog(2), 75);
  
