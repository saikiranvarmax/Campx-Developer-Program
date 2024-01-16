//Cache With Time Limit

class TimeLimitedCache {
    constructor() {
      this.cache = new Map();
    }
  
    set(key, value, duration) {
      const currentTime = Date.now();
  
      if (this.cache.has(key)) {
        const { expirationTime, timer } = this.cache.get(key);
        clearTimeout(timer);
        this.cache.set(key, {
          value,
          expirationTime: currentTime + duration,
          timer: setTimeout(() => this.deleteKey(key), duration),
        });
        return true;
      } else {
        this.cache.set(key, {
          value,
          expirationTime: currentTime + duration,
          timer: setTimeout(() => this.deleteKey(key), duration),
        });
        return false;
      }
    }
  
    get(key) {
      const currentTime = Date.now();
      if (this.cache.has(key)) {
        const { value, expirationTime } = this.cache.get(key);
        if (currentTime < expirationTime) {
          return value;
        } else {
          this.deleteKey(key);
        }
      }
      return -1;
    }
  
    count() {
      const currentTime = Date.now();
      let activeCount = 0;
  
      for (const [key, { expirationTime }] of this.cache) {
        if (currentTime < expirationTime) {
          activeCount++;
        } else {
          this.deleteKey(key);
        }
      }
  
      return activeCount;
    }
  
    deleteKey(key) {
      this.cache.delete(key);
    }
  }
  
  //Test Case
  
  const cache = new TimeLimitedCache();
  console.log(cache.set(1, 42, 100)); 
  console.log(cache.get(1)); 
  console.log(cache.count()); 
  setTimeout(() => console.log(cache.count()), 50); 
  setTimeout(() => console.log(cache.get(1)), 150); 
  



