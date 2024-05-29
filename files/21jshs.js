/*
// Scope

● Global scope is the outermost scope of the code.

● Block scope is the scope that is limited to a particular program like function, if-else etc.

● Block scopes can access global scope, but vice-versa cannot.

● If a block is defined inside another block, the former block's scope is like global scope to the latter.

● If two variables of same name are in global as well as block scope, the block one will get precedence.

● If a variable is needed for an operation inside a block, it will first search for its block scoped variable and if not available it will go to in global scope to search for it.

● The global scope of Windows and Node.js is different.

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

let c = 200

{
    let a = 40
    let b = 50
    {
        let a = 100
        let d = 300
        console.log(`This is inside block a ${a}`)
        console.log(`This is inside block c ${c}`)
    }
    console.log(`This is outside block a ${a}`)
    console.log(`This is outside block c ${c}`)
    console.log(`This is outside block d ${d}`)
}