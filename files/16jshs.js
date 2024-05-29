/*
// Objects--1

● Objects made by constructors are singleton. Singleton means the made object is completely unique and it is only one piece. Syntax:

Object.create()

● When we make objects using in the literal way, multiple instances are formed. Syntax:

const obj_name = { key-value }

The {} is the object although empty here.

● Unlike Arrays, objects allow us to name keys. Whatever we write as keys are taken as strings even if we do not write them inside ``.

● Any data type can be given as values.

● We can access keys of object by the following:

1. obj_name.key_name
2. obj_name[`key_name`]
3. We can also use the ways to add new key-value pairs to existing objects.

● To use a Symbol inside an object, it is mandatory to write the Symbol name in [].

const Symbol_name = new Symbol('123')

const obj = {
    [Symbol_name]: "value_given"
}

The second way of accessing keys without `` in objects is the only effective way for Symbols.

obj[Symbol_name]

● We can stop letting an object change by applying freeze on it. There are similar actions for other data types as well like Array, String etc.

Object.freeze(obj_name)

● The Array() constructor creates Array objects.

● The Function() constructor creates Function objects. Calling the constructor directly can create functions dynamically, but suffers from security and similar (but far less significant) performance issues as eval(). However, unlike eval (which may have access to the local scope), the Function constructor creates functions which execute in the global scope only.

● Every data type in JS has its constructors which creates new instances of each data type in JS.

● If we do not execute a function but just access the function inside an object, only the reference of the function is given.

● When we need to refer to the same object, we have to use the `this` keyword.

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
const mySym = Symbol(5)
const obj = {
    name: "kutta",
    f: function (params) {
        return `Hello f`
    },
    [mySym]: "Wow",
    func: function (params) {
        console.log(`${this[mySym]} is the own Symbol of this object and name is ${this.name} and the f is ${this.f()}`)
        // This way Symbols are accessed by `this`
    }
}

const sym = Symbol(`1`)
const sym1 = Symbol(`10`)
const sym2 = Symbol(`10`)

// Adding
obj[sym] = "Symbol"
obj[sym1] = "Symbol5"
obj[`sym2`] = "Symbol50"

console.log(obj)

obj.func()