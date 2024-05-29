/*
// Bind

• In the earlier times, React had a built-in class that had the variables of 'server', 'library' and some other props.

• In the 'call this' lecture, 'this' of the top function was not hard coded 'this', 'this' changes depending on where the context changes. But in that scenario it refered to the global context when used alone and even when used inside the bottom function because, inside the bottom function the contex was the global context(change this statement upon re-watching)

• A very simple way to understand `this` is that 'jisne call kiya wahi hain this'

• When a function is used as a callback, `this` is lost.

1.In an object method, this refers to the object.
2.Alone, this refers to the global object.
3.In a function, this refers to the global object.
4.In a function, in strict mode, this is undefined.
5.In an event, this refers to the element that received the event.

Methods like call(), apply(), and bind() can refer this to any object.

● Syntax:

bind(thisArg)
bind(thisArg, arg1)
bind(thisArg, arg1, arg2)
bind(thisArg, arg1, arg2,...argN)


• const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42

From the above scenary, we can understand that when in the previous time we had said that the current context changes upon the location of usage. But, if bind() is used, the given thisArg will be the `this` for the method no matter where it goes. This is how it binds `this` to a function.

• The call method is used to call a function and specify the “this” value for the function. It takes two arguments: the value to be used as the “this” value inside the function, and an optional list of arguments to be passed to the function.

• The apply method is similar to the call method, but instead of specifying the arguments to the function individually, it takes an array of arguments to be passed to the function.

• The bind method is used to create a new function with the same body as the original function, but with a different “this” value. It also takes an optional list of arguments to be passed to the new function when it is called.

• bind() does not overwrite the references to the element to which event listener is attached rather just binds the given thisArg reference as the `this` to be accessed inside the method to which bind() is applied. 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

*/

const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
}

let fullName = person.fullName.bind(member);

console.log(fullName())

class dog {
  firstName = `rob`
  lastName = `bob`
  getShow() {
    console.log(fullName())
  }
}

function now(params) {
  firstName = `nob`
  lastName = `job`
  console.log(fullName())
}

let d = new dog()
d.getShow()
now()

// Hitesh Sir Example
class Vue {
  constructor(name) {
    this.library = name
    this.server = 'https://localhost:7000'
  }

  static getThis() {
    return this
  }
}

let app2 = new Vue(`dhut`)

class React {
  constructor() {
    this.library = 'React'
    this.server = 'https://localhost:3000'
    console.log(this);

    // document.querySelector('button').addEventListener(`click`, this.handle.bind(app2))


    document.querySelector('button').addEventListener(`click`, this.handle.bind(this))
    // This event listener is kind of universal, as this is not bound to anything but only created due to the creation of an object.
  }

  handle() {
    console.log('Clicked');
    console.log(this);
    console.log(this.library);
  }

}

let app = new React()



