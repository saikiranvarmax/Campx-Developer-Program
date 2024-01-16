//Interval Cancellation

function cancellable(fn, args, t) {
    const result = [];
  
    const intervalId = setInterval(() => {
      const time = Date.now();
      const returned = fn(...args);
      result.push({ time, returned });
    }, t);
  
    const cancelFn = () => {
      clearInterval(intervalId);
      console.log(result);
    };
  
    setTimeout(() => {
      cancelFn();
    }, t);
  
    return cancelFn;
  }
  
  //Test Case
  const cancelTimeMs1 = 190;
  const cancelFn1 = cancellable((x) => x * 2, [4], 35);
  setTimeout(() => cancelFn1(), cancelTimeMs1);