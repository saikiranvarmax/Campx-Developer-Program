//Counter 2

function createCounter(init){
    let currentcount = init;
    return {
        increment:()=>{
            currentcount++;
            return currentcount;
        },
        decrement:()=>{
            currentcount--;
            return currentcount;
        },
        reset:()=>{
           currentcount = init;
           return currentcount;
        }

    };

};
