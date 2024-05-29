/*
// Promise

● The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

● A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.

fulfilled: meaning that the operation was completed successfully.

rejected: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's then method are called. If the promise has already been fulfilled or rejected when a corresponding handler is attached, the handler will be called, so there is no race condition between an asynchronous operation completing and its handlers being attached.

● 

● 

● 

● 

● 

● Syntax:

const var_name = new Promise(function (resolve, reject) {
    async code
    resolve(`argument_passed_on_completion`) / reject(`argument_passed_on_rejection`)
})

promise_var.then(function(resolved_argument) {
    code upon completion
}, function (rejected_argument) {
    code upon rejection
}).finally( function() {
    this code will run always no matter resolved or rejected
})

or,

promise_var.then(function(resolved_argument) {
    code upon completion
}).catch(function(rejected_argument) {
    code upon rejection
}).finally( function() {
    this code will run always no matter resolved or rejected
})

● We can pass responses from the Promise to .then and .catch by the help of resolve() and reject() respectively.

● To check whether the Promise was successful or failure we can use if statements.Example:

new Promise(function(resolve, reject) {
    async code
})

● .then and .catch will not receive the reject() and resolve() arguments respectively.

● When we return something from a .then, it is passed to the parameter of the next .then. When we return promises from then, the next .then catches the resolved/rejected value of the returned promise. We could also say that even if a normal thing is returned by a .then, it is wrapped in a promise and the return value is resolved as the promise's resolve value and the next .then takes it.

● We can use async/await keywords to have similar operations like .then and .catch
We can use `await` only inside async functions and at the top of modules. 
Syntax:

const as_func = async (parameters) => {
    code
    .
    .
    const response = await Promise_name
} 

● The `await` keyword waits for the thing in its right to complete before letting the program go any further.

● There is another way of catching errors:

try {
    code to try to execute
} catch (error) {
    code to run if error happens
    The error parameter receives the error.
}

● JSON.parse(convertable_string) / convertable_string.json() both take time to convert as well so we should use await before them.

● 

● 

● 

● Several operations may need uncertain time intervals. For example, accessing files, fetching info from DB, encrypting passwords, cryptography etc.

● Program cannot directly access the files, it needs to take the help of kernel.

◉ With the help of promise chaining we enable the situation of dotting then with the returned promise of previous .then.

• The .then of a promise gets only the values of its promise even if it is in promise chaining.

• In a chain, the next promise should be followed by similar actions like reject() if its previous promise was rejected. Check break point.

• If a value is returned and it is .then(ed), a promise will be automatically created and resolved with the value.

• If there are chances of getting error in a promise, we can create a callback or function that has the doing the work again(which got error) and calls itself on error. As a result, we will save time, for not writing the code multiple times.

• If you call the then() method twice on the same promise object (instead of chaining), then this promise object will have two pairs of settlement handlers. All handlers attached to the same promise object are always called in the order they were added.

◉ These are 6 methods of promise object.

• If we want to use the result of a promise in synchronous code, we can assign those in different global variables and use them later on.

• Promise.all([promise1, promise2, promise3,...]) -> It returns an array with the resolved values of all the promises when all of them are completed. It will not run if even a single promise gets rejected. The returned value is set as the resolved value of the combined promise.

• Promise.allSettled([promise1, promise2, promise3,...]) -> It returns an array with the resolved or rejected values of all the promises when all of them are completed. The returned value is set as the resolved value of the combined promise.

• Promise.race([promise1, promise2, promise3,...]) -> It returns the value of first promise that is resolved or rejected. It will throw error if the first completed one is rejected.

• Promise.any([promise1, promise2, promise3,...]) -> It returns the resolved value of first ever promise that is completed as resolved from all of them. It will throw an AggregateError if none of the promises were resolved.

• Promise.resolve(value) -> It returns a resolved promise with the given value.

• Promise.reject(error/value) -> It returns a rejected promise with the given error or value.

*/

// const promiseOne = new Promise((resolve, reject) => {
//     console.log(`Promise one started`);
//     setTimeout(() => {
//         console.log(`Promise one run`);
//         resolve(`Promise resolved`)
//         // reject(`Promise rejected`)
//     }, 2000)
// })

// promiseOne.then((e) => {
//     console.log(e);
//     return e
// }).then((ee) => {
//     console.log(ee);
// })

const p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`p1 done`);
            resolve(1);
        }, 1000);
    })
}

const p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`p2 done`);
            resolve(1);
        }, 1000);
    })
}

const p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(`p3 done`);
            resolve(1);
        }, 1000);
    })
}

async function f(params) {
    let p11 = await p1()
    let p22 = await p2()
    let p33 = await p3()
}

f()