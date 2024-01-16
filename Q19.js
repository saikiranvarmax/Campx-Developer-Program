// Execute Asynchronous Functions in Parallel

var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
      const results = [];
      let count = 0;
  
      for (let i = 0; i < functions.length; i++) {
        functions[i]()
          .then((result) => {
            results[i] = result;
            count++;
  
            if (count === functions.length) {
              resolve({ t: Date.now(), resolved: results });
            }
          })
          .catch((error) => {
            reject({ t: Date.now(), rejected: error });
          });
      }
    });
  };
  
 //Test Case
  
  const example1 = [
    () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
  ];
  
  promiseAll(example1).then(console.log).catch(console.error);


