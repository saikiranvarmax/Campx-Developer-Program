//adding 2 promises

var addTwoPromises = async function(promise1, promise2) {
    let number1 = await promise1
    let number2 = await promise2
    return number1+number2  
}

//Test Case

let num = addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
);

num.then(result => console.log(result));
