/*
// Objects--2

● Singleton objects are defined with the help of constructors.

const obj_name = new Object() // Creates an empty object that can be added with key-value pairs.

const obj_name = new Object(value) // Converts the value into object.

● Objects can be nested inside objects.

If name is a property of o3 nested inside o2 in o1. To access it, follow the syntax:

o1.o2.o3.name

or,

o1[`o2`].o3.name

● Optional chaining can be done to make something executable on the availability of other.

o1.o2.o3?.o4.o5....

The syntax states that if and only if o3 exists, the compiler should go beyond o2.

● Object.assign({}, ob1, ob2, ob3,..)

Returns the Combination of all the objects and puts the properties in the target object. Target object is the first given parameter and the other ones are sources. If an existing object is given as target, it will be updated. It is better to give an empty object as target in order to preserve the previous ones.

● If multiple keys of same name exist in the sources or target, the last one among the sources will override all of them.

● We can also use spread operator.

● Object.keys(obj_name) returns all keys of the obj_name into an array.

● Object.values(obj_name) returns all values of the obj_name into an array.

● Object.entries(obj_name) returns each key-value pairs in an array wrapped into an array.

● obj_name.hasOwnProperty(propertyname) returns a boolean based on if the obj_name has a property of the given name.

● Enumerable means is the thing repeatable / loopable.

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

// const o = new Object(10, 2, 3) // Only the input is counted
// const arr = [1, 2, "Wow"]
// const o = new Object(arr)
// console.log(typeof o, o);

const ob = {
    fullname: {
        user: {
            firstname: `wow`,
            lastname: `buddy`
        }
    },
    age: {
        value: 50,
        // predicted: {
        //     isValid: {
        //     value: 100
        // }
        // }
    }
}

console.log(ob['fullname']['user']);

console.log(ob[`age`][`predicted`]?.isValid); // If ? operator is not used then error would pop.

// Assign
const o1 = {
    v1: 1,
    v2: 2
}

const o2 = {
    v3: 3,
    v4: 4
}

const o3 = {
    v5: 5,
    v6: 6
}

const obje = {}
const obj = Object.assign(obje, o1, o2, o3)

console.log(obj === obje);

// Spread
const objec = {...o1, ...o2, ...o3}

console.log(obj === objec);

// Methods

console.log(Object.keys(objec))
console.log(Object.values(objec))
console.log(Object.entries(objec))
console.log(objec.hasOwnProperty(`v10`))
