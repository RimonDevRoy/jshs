/*
// IIFE

● It stands for Immediately Invoked Function Expressions.

● It is used to save the function from global scope pollution.

● IIFE does not know where to stop the context and for this we have to use semicolon after it.

● IIFE containing named function definitions are named IIFE. Syntax:

(function_definition)(arguments)

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

● 

*/

(function named(params) {
    console.log(`Named IIFE ${params}`);
})(`Oh Yeah`);

console.log(( (par) => `IIFE: ${par}`)(`unnamed`))

