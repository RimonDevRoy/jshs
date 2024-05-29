/*
// Call Stack

● JS Execution Context: It is the way by which JS executes the file made by user. It is run by 2 phases.

● The place where the whole code file is kept is Global Execution Context and it is stored in `this` although we cannot directly access different variables and all that by `this`.

● The Global Execution Context of node.js, deno.js, bun,  browser etc. is different.

● The Global Execution Context of browser is Window object.

● The Global Execution Context of backend servers is empty object.

● For this, we cannot render code that requires Window object access on the server side.

● JS is a single threaded programming language.

● Generally, there are Global Exectution Context and Fucntional Execution Context in JS.

● Another possible execution context is Eval Execution Context. It is a property of Global Object so it can also be said included in Global. It is found in DB like mongoose.

● The Code in Global Execution Context is run through 2 phases one is `Memory Creation Phase(Creation Phase)` and other one is `Execution Phase`.

● Only the variables, function definitions etc. are allocated in memory in Memory Creation Phase.

● All sorts of operation and execution of code is done in Execution Phase.

● The STEPS of execution are:

1. Global Execution Context is created and the whole code is stored in `this`.

2. Memory Creation Phase: At first, all the variables and function definitions are allocated in memory and undefined is stored in it(if variable) and definition of function if function. All of this is done serially. This phase is also called 1st cycle. It will happen no matter what happens.

3. Execution Phase: In this phase the values of all the allocated entities get their values assigned and functions make their own context(Functional Execution Context) where its own variable environment and its own execution thread is created. In Functional Execution Context, MCP and EP is run again. The return statement is returned to its Parent Execution Context(generally GEC, but could be FEC or other contexts if there is nesting). After the end of execution of each Function, the FEC for it is deleted.

////////// Call Stack //////////

● At the bottom of the Call Stack, there is always GEC.

● When a function is called, it is stacked on top of the previously stored methods in the Call Stack and it is popped when its execution is over(never before it ends)

● It runs on LIFO(Last In First Out)

● If we add breakpoints, we can travel through the happenings at those breakpoints. It can be done in Browser as well as VS code.

● We can observe Call Stack and other factors in the Sources section of Inspect in the Browser.

● 

● 

● 

*/

// let a = 560
// console.log(this.a)

// Observe
let v1 = 10
let v2 = 5

function add(n1, n2) {
    let total = n1 + n2
    return total
}

let result1 = add(v1, v2)
let result2 = add(20, 10)

// Call Stack

function func() {
    console.log(`Unnested 1`);
    f2() // If we do this, the functions will run for infinity.
}

function f1() {
    console.log(`Unnested 2`);
}

function f2() {
    console.log(`Nested parent`);
    function f3() {
        console.log(`Nested 1`);
        function f4() {
            console.log(`Nested 2`);
            function f5() {
                console.log(`Nested 3`);
                func()
            }
            f5()
        }
        f4()
    }
    f3()
}

func()
f1()
f2()

/*
In the above scenario, func will be stacked in the CS popped after its execution is done(assuming we did not run f2 inside it) and similar phenomenon will happen for f1. After that, f2 will be stacked and here before its execution is over, f3 will be stacked over it. Similarly, f4 and f5 will also be stacked on top of them and when f5 execution is over, it will be popped and after f5 execution is over, f4 execution will also be over and popped. This will happen for f3 and f2 as well.
*/
