/*
// Functions--1

● Function is a package of a number of lines of code that can be used multiple times with ease and not needing to write the same code multiple times.

● Always think of writing any code in a function at first.

● It also comes handy when we need to make changes in the code, it will be problem if we just write the code everywhere but will only need to alter the code in the function and the change will be reflected everywhere.

● There are a number of way to define functions:

1. function function_name (parameters) { code }
2. const/let var_name = function (parameters) { code }
3. const/let var_name = (parameters) => { code }


● We can invoke function by:

function_name (argument_values)
    |                  |
 reference         execution    

● What is given in the `return` is returned to the exact spot where the function was invoked.

● We must check the data type in function before using any of the arguments received.

● If we write anything after return statement, it will not be reachable by the program, that is, won't be executed.

● If no argument is passed on the spot where it needs one, undefined is taken(not null) because it is not defined yet.

● If only `return` statement is used, the code execution of the function is over there.

● We can use !var_name to get the opposite of what var_name has.

● If else statements run based on if the condition is true or not.

● We can declare default arguments for the functions, they will be overridden if user passes arguments.

● 

● 

● 

● 

● 

● 

● 

● 

*/

function add(n1, n2, n3 = 50) {
    // if (typeof n1 !== "number", typeof n2 !== "number") {
    //     return
    // }
    return (n1 + n2 + n3)
}

function add1(n1, n2, n3 = 50) {
    if (typeof n1 !== "number", typeof n2 !== "number") {
        return
    }
    return (n1 + n2 + n3)
}

console.log(add(10, null))
console.log(add(10))
console.log(add(10, 20))
console.log(add(10, 20, 30))
console.log(add1(10, null))
console.log(add1(10))
console.log(add1(10, 20))
console.log(add1(10, 20, 30))