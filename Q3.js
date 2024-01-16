//To be or not to be

function expect(n){
    return {
        toBe: (n1)=>{
            if(n===n1){
                return true
            }else{
               throw Error("Not Equal");
            }
        },
        notToBe:(n2)=>{
            if(n!==n2){
                return true;
            }else{
                throw Error("Equal")
            }
        }
    }
}


//Test case

try {
    const result1 = expect(5).toBe(5);
    console.log(result1);  
} catch (error) {
    console.error(error.message); 
}

try {
    const result2 = expect(5).notToBe(5);
    console.log(result2);  
} catch (error) {
    console.error(error.message); 
}
