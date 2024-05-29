/*
// Loop -- while

● The initialization of iterator for while and do-while loop is done in its ancestor's scope. Syntax:

// while
iter_var = strt
while (condition) {
    code
    iter_var updation
}

// do-while
iter_var = strt
do {
    code
    iter_var updation
} while (condition)

● The do-while loop runs for atleast once even if the condition is false at the time of execution.

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

● 

● 

● 

● 

● 

● 

*/

let i = 0
while (i < 10) {
    console.log(`i is ${i}`);
    i = i + 3
}

let j = 0
do {
    console.log(`j is ${j}`);
    j = j + 3
} while (j < 0);                    