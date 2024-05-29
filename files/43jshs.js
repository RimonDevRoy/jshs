/*
// Prototype

● Prototypal behaviour is the default behaviour of JS.

● If the method or property we are trying to access for an object is not available for it, JS goes one level up(its prototype) and searches and if it even doesn't find it there, it will go one step higher(its prototype) and continue until it gets `null` for that method or property.

● `this` and `new` keywords work in connection with prototypal behaviour. Classes and protoypal inheritance/inheritance are also available in JS due to prototype.

● Prototype is the reason why `this` keyword is not available for arrow function.

● The defualt prototype of `Object` is `null`.

● We can say that each and everything in JS is an Object. Strings, Arrays etc. That means, the properties and methods of Object are available to all of them no matter usable or not. So, in brief, everything in JS is -> itself + object.

     Function
            \ 
    Array -> Object -> null
            /
      String      

● We can know the prototype of something by .prototype

● We can behave with data types in JS as if they were objects and implement the implementing styles of object.

● this: The this keyword refers to the context where a piece of code, such as a function's body, is supposed to run. The context of something's prototype is `this` for the something. Most typically, it is used in object methods, where this refers to the object that the method is attached to, thus allowing the same method to be reused on different objects. What is meant by it is that when a method is defined, the properties inside it could have a name and that name is same for all instances of the objects and the method could be confused which object's property's value to take? And `this` refers to the context of the Object prototype inside which the method will run and by it the method gets to know that it should access the property of the object where it is in. The object

● We can define our own methods for data types by doing data_type.prototype.method_name = method_defination

But we must use `new` to declare the changes(there were no such methods but now there is) made to the prototype.

● If the return values of functions are being stored in some variable, the context given to that particular variable is the context of `this` for that scenario. Same is for objects and others.

● When `new` keyword is used, the following things happen:

1. A new object is created: When the keyword is used, a new object having the properties and methods of the reference is created. Here, reference is the thing on which the keyword is used. For example,

createUser(parameters) {
        code
}

let c1 = new createUser(arguments)
Here, createUser is the reference. Function reference

2. A prototype is linked: The manually defined properties and methods were in the air for the time until the `new` keyword is used. The At first, upon the use of `new`, an object is initiated and the prototype of the constructor fucntion is linked. Then, the manually defined properties and methods along with the built-in ones are assembled and linked with the prototype and the constructor function is made. The assembling is done and then the reference is checked made on the basis of the reference.

3. The just made constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JS assumes the newly created object, to be the intended return value. The reference's form of code is taken as the structure of constructor function(my speculation).

4. The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function etc.), the newly created object is returned.

● We can access different data types by writing: Array, Object, String, Function etc.

● We can set a method or property in Object so that it is available in in objects as well as other data types.

● A method defined in Array or other data type is not accessible by other data types, but if it is defined in Object then it is available in all other data types.

● We can make objects inherit properties and methods other objects or data types by assigning to their __proto__. This syntax is outdated.

● Modern syntax:

Object.setPrototypeOf(taker_object, proto_object)

● Every instance is unique and has its own context.

● We can always use pre-existing functions as constructor functions.

● The class syntax is just a syntactical sugar over the prototypal inheritance. When we use extends for class, under the hood the prototype of the child class object is set to parent class object.

● `this` in simple words means whoever calls. That is, when `this` is used inside something, the context of the thing accessing the something becomes `this`

● 

● 

● 

● 

● 

● 

*/

let func = function (params) {
        let arr = [1, 2]
        console.log(arr);
}

func.example = 10
func[`example2`] = 10
// We can set any random property just like we can do for objects.
console.log(func.example);
console.log(func.example2);
func()
console.log(func.prototype);

// Prototypal inheritance
const o1 = {
        name: `john`
}

const o2 = {
        isAvailable: true,
        __proto__: o1
}

const o3 = {
        fullTime: true,
        __proto__: o2,
}

console.log(o3);
console.log(o3.name);
console.log(o3.isAvailable);

Function.prototype.showThis = function () {
        console.log(this);
        console.log(this.name);
}

let f =  ()=> {
        console.log();
}

Function.showThis()
f.showThis()
func.showThis()
