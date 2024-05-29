/* 
// Call and this

● For simpler understanding, we can think that when something will be used in different contexts, we will need to use `this` in that something. 

● The call() method of Function instances calls this function with a given this value and arguments provided individually.

Syntax:

function_on_which_call.call(thisArg)
function_on_which_call.call(thisArg, arg1)
function_on_which_call.call(thisArg, arg1, arg2)
function_on_which_call.call(thisArg, arg1, arg2, ...argN)

Parameters:

thisArg
The value to use as this when calling func. If the function is not in strict mode, null and undefined will be replaced with the global object, and primitive values will be converted to objects.

arg1, …, argN (Optional)
Arguments for the function.

Return value
The result of calling the function with the specified this value and arguments.

Normally, when calling a function, the value of this inside the function is the object that the function was accessed on. With call(), you can assign an arbitrary value as this when calling an existing function, without first attaching the function to the object as a property. This allows you to use methods of one object as generic utility functions.

● Note: This function is almost identical to apply(), except that the function arguments are passed to call() individually as a list, while for apply() they are combined in one object, typically an array — for example, func.call(this, "eat", "bananas") vs. func.apply(this, ["eat", "bananas"]).

● Warning: Do not use call() to chain constructors (for example, to implement inheritance). This invokes the constructor function as a plain function, which means new.target is undefined, and classes throw an error because they can't be called without new. Use Reflect.construct() or extends instead.

● call() is almost equivalent to a normal function call, except that this is passed as a normal parameter instead of as the value that the function was accessed on. This is similar to how general-purpose utility functions work: instead of calling array.map(callback), you use map(array, callback), which allows you to use map with array-like objects that are not arrays (for example, arguments) without mutating Object.prototype.

● The given example below requires using method call(), because if a function is given some particular task and needs access to some properties, then the variables used inside the inner function are of its own context, thus, to pass the reference of context we use call() method.

● It basically holds the reference of the variables and methods inside the function where call() is applied.

● `this` is basically is a reference to an object.

● To just hold the reference of variables or methods we use call(). bind() and apply() are used for some other unique purpose.

● The thisArg passed to the call becomes the `this` inside the function on which call() is applied. If you want to use a method of one object as generic utility function, then call() can be used for this purpose; in general, bind() should not be used because it requires two separate arguments and two references that are the same values — which is too much work when all we're doing is calling an existing function on its own. That is, making an utility function that sets different variables.

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

// Complex Example
// const userPhn = {
//   phn: `01754596871`
// }

// function userPhnSetter(userphn) {
//   this.phn = userphn.phn
// }

// function userNameSetter(username) {
//   this.username = username
// }

// function userDetailsSetter(username, age, userphn, address) {
//   this.username = username
//   this.age = age
//   userPhnSetter.call(this, userphn)
//   this.address = address
// }

// const user = new userDetailsSetter(`hs`, 20, userPhn, `Majortila`)
// const user2 = new userNameSetter(userPhn)

// console.log(user);
// console.log(user2);
// console.log(user.constructor);
// console.log(user2.constructor);

// Experiment
function setName(username) {
  this.username = username
  console.log(username);
  console.log(this.username);
}

function User(username, age, roll) {
  // setName.call(User, username)
  setName.call(this, username)
  this.age = age
  this.roll = roll
}

const user = new User(`hs`, 20, `01`)

console.log(user);