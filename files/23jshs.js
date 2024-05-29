/*
// this & arrow function

● `this` refers to the current context, that is, if used inside an object, it will refer to the things inside the scope of the object.

● Context can change if the values of the keys change. For example, if age was `30` then the context about 30 and if it is changed to `50` then the context is now about 50.

● The current context of node.js environment global scope is an empty object, the current context of global scope of browser is Window object.

● The context concept is related to objects mainly. Function won't let use `this` for user defined things inside it.

● Using `this` shows the context of the function in case of declaration with using function keyword and storing in a variable, but shows empty object when used to show the context of an arrow function.

● Syntax of arrow function:

(parameters) => {
    code
}

or, 

const var_name = (parameters) => {
    code
}

Invoking syntax:

var_name(arguments)

● To use implicit return we use the return statement in the same line. Syntax:

const var_name = (parameters) => code

or,

const var_name = (parameters) => (code)

The `code` is returned.

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

let o = {
    namee: `Kutta`,
    runner: function () {
        console.log(`${this.namee}, welcome`)
        console.log(this)
    }
}

let a = 50

// o.runner()
// o.namee = `dog`
// o.runner()
// console.log(this)

function wow() {
    console.log(this)
    // Notice the output 
}

const wow1 = function () {
    console.log(this);
}

const wow2 = () => {
    console.log(this);
}

// wow()
// wow1()
// wow2()

const lol = () => (5+5)
const lol1 = () => 5+5
const lol2 = () => (o)

console.log(lol());
console.log(lol1());
console.log(lol2());