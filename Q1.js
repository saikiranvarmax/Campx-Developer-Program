// createHelloWorld
function createHelloWorld(){
    return ()=>{
        return "Hello World";
    }
}

//Test Case
newfunction = createHelloWorld();
console.log(newfunction());
console.log(newfunction([]));
console.log(newfunction([{},null,42]));


