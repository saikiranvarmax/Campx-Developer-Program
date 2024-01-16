//counter

function startCounter(n){
    let start = n;
    return function(){
        const presentCount = start;
        start++;
        return presentCount;
    }
}

//Test case

counter = startCounter(10);
console.log(counter());
console.log(counter());
console.log(counter());

