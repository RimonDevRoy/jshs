/*
// Summary on data types

● Data types are divided into two types based on how data is kept and accessed from the Memory:

1. Primitive: They are call-by-value. It means the data is everytime copied from the memory and served, direct reference is not given. They are:
    i. String
    ii. Number
    iii. BigInt
    iv. Symbol
    v. Null
    vi. Undefined
    vii. Boolean

2. Non-primitive(reference type): They are call-by-reference. It means the direct reference of the data is served. They are:
    i. Array
    ii. Object
    iii. Function etc.

● Statically typed programming languages are those that check the type of data at compile time and Dynamically typed programming languages are those that check the type of data at runtime of the program. JS is dynamically typed programming language.

● "null" means emptiness, not 0

● Even if same values are passed to Symbol("value"), the symbols that are returned against the values are unique.

const var_name = Symbol("value")

● Generally, to declare a BigInt we use the syntax below:

const var_name = 65168756358549367498465n

● Arrays are declared in the following way:

const arr_name = [val1, val2, val3, ...]

● Objects are declared in the following way:

const obj_name = {
    "key": value,
    "key": value,
    ...
    "key": value
}

The keys and values might need to be written inside quotes("" / '') sometimes.

Objects can also be passed without storing it in a variable by simply giving the part of { code } to the spot where it expects an object.

Objects can store variables, functions and even other objects.

● Functions are declared in a number of ways, one of them is:

const var_name = function() {
    code
}

● All non-primitive data types return "object" and they are preceded by the type like object array, object function etc.

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

const arr = [1, 2, 3 ,4]

const obj = {
    k1: 50,
    k2: "Name",
    "k3": 100
}

const myFunc = function (params) {
    console.log("Wow")
}

console.table([typeof arr, typeof obj, typeof myFunc])