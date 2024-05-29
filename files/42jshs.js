/*
// OOP

• In the 4 Projects lecture - The reason hc sir put eventlistener inside if statement is: Whenever the condition would be false, even if the event triggered, it would be as if the event listener had not existed and thus, nothing would happen. What I learnt from this is that this is a hard check process. The event listener would only exist if the condition is true and the program would compile like that.

• JavaScript is actually a prototype-based language. The syntax of classes is just a syntactic sugar over the existing prototype based inheritance. In JS objects inherit different properties and methods through prototypes. This is because even though an object is coming from a class, it can inherit from its prototype, and it can also gain new properties and methods from prototype even if it does not come from a class.

• Constructor is a special method for creating and initializing objects made with the help of classes.

• OOPS is a programming paradigm.

• Object literal means: "literally an object". That's it.

• There are 4 pillars of OOP: 
1. Abstraction
2. Encapsulation 
3. Polymorphism 
4. Inheritance 

• Abstraction: It basically means hiding internal under the hood works. Example is fetch(). It is said that wherever abstraction is noticed, there is OOP. Thus, fetch() can also be called an example of OOP. Abstraction in computer programming is a way to reduce complexity and allow efficient design and implementation in complex software systems. It hides the technical complexity of systems behind simpler APIs.

• Encapsulation: Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a "blackbox" out of the object. Because of this, a user of that class only needs to know its interface (that is, the data and functions exposed outside the class), not the hidden implementation.

• Polymorphism: Polymorphism is the presentation of one interface for multiple data types.

For example, integers, floats, and doubles are implicitly polymorphic: regardless of their different types, they can all be added, subtracted, multiplied, and so on.

In the case of OOP, by making the class responsible for its code as well as its own data, polymorphism can be achieved in that each class has its own function that (once called) behaves properly for any object.

• Inheritance: Details will be explained in the lecture of "prototype"

• We will look into 4 concepts deeply. They are:
1. Constructor() Function
2. Classes
3. Prototypes 
4. Instance (new and this keywords)

● We can speculate the concept of `this` by a case study. Suppose we have map() method available for all arrays, but when we apply this method to an array, how will the map() method know which array to apply on? Here `this` comes to the rescue. Methods have their own execution context so to take properties outside(where `this` refers to) of the method we must use `this`, otherwise the method would be confused which property to consider.

● When we need to make multiple objects, we have to write them mulitple times and to reduce effort, classes are used in JS to create mulitple objects from a single template. The `new` keyword is a constructor function. It instructs the class to create a new instance of the same structure without altering the previous ones. This essentially creates a new context(new object's context)

● We can make and refer to new variables inside functions by using: `this.var_name`

● If we return `this` from a function, it returns the reference of the function and everytime we pass arguments to the function it overrides the previous one if `new` is not used. We can access the manually set properties to the function by dotting them. This style of making function can act as Constructors.

● Steps:
1. Using `new` first of all makes an empty object(called instance) even if it is used before a function.
2. Packs the properties and methods in the instance.
3. Assigns the given arguments to the properties.
4. New instance freshly served.

● obj_name.constructor returns the name of the constructor from which the object is made.

● "instance_name instanceOf constructor_name" returns whether the instance is made from the constructor.

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

console.log(this);
const user = {
    username: `Dog`,
    isLoggedIn: true,
    val: this,
    // See how this `this` refers to its parent context?
    showDetails: function () {
        console.log(this.val);
        console.log(this);
    }
}
// This is an object literal.


function func(n1, n2, n3) {
    this.n1 = n1
    this.n2 = n2
    this.n3 = n3

    return this
}
// Now imagine Object(), Array() etc like this.


user.showDetails()
