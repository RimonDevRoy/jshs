/*
// Async

● JS Engine is by default a synchronous, single-threaded programming language.

● We can think of thread as a flow of knots where knots are individual pieces of code that are to be executed.

● A JS Engine is never found along, but inside a runtime environment.

● Every code operation is not run until the one preceding it is complete.

● Blocking Code:
Piece of code that blocks the execution of code that is after it until its own execution is complete.

● Non-blocking Code:
Piece of code that does not block the flow of execution.

● One of the most prominent blocking code is of FILE READING. 

● It depends on the situation that whether blocking or non-blocking code is better.

● An IMPORTANT Diagram is given below:

JS Engine -> Web API / runtime environment(node.js / deno.js / bun etc.) -> High Priority Queue(if fetch() / Promise), or, Register CALLBACK -> Task Queue(if DOM API, setInterval, setTimeout, event handlers etc.) -> JS Engine

The diagram flow is given below:

● JS Engine is made up of Memory Heap and Call Stack. Web API is made up of DOM API, setTimeout, setInterval, fetch(), Promise, and Register CALLBACK. High Priority Queue / Promise Queue holds all the promises called in queue. Task Queue holds all the asynchronous calls like setTimeout, setInterval, event handlers etc.

● At first, in the call stack, the GEC is loaded and functions are loaded one by one according to the rules(25jshs.js). Suppose, a function(or even by independent line in place of the code) in the call stack calls an asynchronous entity, the call is passed to Web API/runtime environment. All the asynchronous calls like setTimeout and event handlers, except Promises, are registered in the Register CALLBACK. The callbacks in the Register CALLBACK are transfered to the Task Queue(FIFO) right on the moment of invocation of their execution and Task Queue places the calls on the Call Stack right away it ets them. The asynchronous calls that went out from the Call Stack are again placed on the Call Stack right on the moment of the call's execution, and the execution is done placing the asynchronous code on the Call Stack. Same goes for Promise Queue, the asynchronous promise calls or fetch calls are transfered in the Promise Queue and are placed in the Call Stack on the moment of their execution, the exectution of the asynchronous code is done placing it in the Call Stack.

● It seems to me that all the asynchronous codes make their own context when they are placed in the Call Stack.

● If a code inside a promise and another asynchronous code is to be invoked at the same time, the promise code is placed first in the Call Stack as Promise Queue is of high priority.

● Imagine a scenario of three lines of code. The first and last lines are synchronous and the second line code is asynchronous. Even if the second line code has a 0 time(immediate invocation), it will go through the regular steps of an asynchronous as explained above. Thus, after the first line is executed, the second line will be sent to Web API/runtime environment as an asynchronous call and then the focus will be shifted to the next line. That is, even if the second line has 0 time for calling, it will take some time to go through the full path and will be executed after the third line of code.

● The time given in setTimeout and setInterval is in miliseconds.

● Web API is a collection of all API's available on the web. Runtime API is a collection of all API's available on the web.

● 

● 

● 

● 

● 

*/

let a = 10
let b = 20
let c = 30

console.log(a + b) // 1st line
setTimeout(() => {
    console.log(b + c)
}, 0) // 2nd
console.log(c + a) // 3rd
// Observe