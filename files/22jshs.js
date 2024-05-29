/*
// Hoisting

● Hoisting is a JS phenomenon that makes every declaration for variable, object, function etc. appear at the top of the code. It does not do the same for definition of them, that is, a variable may be accessible before the line of its declaration but its value would be undefined as its definition is not hoisted.

● We can also store functions in variables, and it is called expression.

● JS variables are extremely powerful, they can hold anything.

● The object and functions declared and stored in a variable cannot be accessed(if 'const', will give undefined if 'let') before their defination because the function is the value of the variable.Syntax:

let var_name = function function_name (parameters) {
    code
}

function_name is not compulsory. 

Invoking syntax:

var_name(arguments)

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

add(10)
// addone() // Wrong

let add = function addone (num) {
    console.log(num + 1)
}
