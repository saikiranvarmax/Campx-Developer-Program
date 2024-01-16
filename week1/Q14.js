// time out Cancellation

function cancellable(fn, args, t) {
    let isCancelled = false;
  
    const cancelFn = () => {
      isCancelled = true;
    };
  
    setTimeout(() => {
      if (!isCancelled) {
        const result = fn(...args);
        console.log([{"time": t, "returned": result}]);
      }
    }, t);
  
    return cancelFn;
  }
  
  // //Test Case
  
  const cancelTimeMs = 50;
  const cancelFn1 = cancellable((x) => x * 5, [2], 20);
  setTimeout(cancelFn1, cancelTimeMs);
  

  