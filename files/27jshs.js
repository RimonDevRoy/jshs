/*
// Loop -- for

● The most basic loop is `for` loop. As functions when called shift their execution control to its definition and come back after execution, similarly for loops jump a lot and shift their execution control very often. Syntax:

for (let iter_var = value; condition; variable_alteration_after_each_scope_execution) {
    code
}

● The variables declared inside a scope are destroyed after successful execution.

● `CTRL + D` Selects the next same words.

● If several loops are nested, the total number of repeatations will be:

Total = i(1 + j(1 + k(1 + l(1 + m(....(1 + (n-1)th_iter(1 + nth_iter)))))))

Here i,j,k etc are iter_var's highest limit in the condition depending on <,> or <=, >= is used of each loop. If <,> is used and iter starts from 0, the values will decrease by 1 to match 0->limit. If iter starts from 0 and <=,>= is used, value will increase by 1. This calculation has to be done manually. nth_iter is the limit value of condition of nth loop. Actually highest limit can be calculated by:

If in condition <= x,
Highest limit = (x - iter_strt_value) + 1

If in condition < x,
Highest limit = (x - iter_strt_value)

All the above formula were made provided that, the iter_var is increasing per each loop execution.

● Observe Continue and Break in the code below.

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

// let first = 0;
// let second = 0;
// let third = 0;
// let fourth = 0;

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 4; j++) {
//         for (let k = 1; k <= 5; k++) {
//             for (let l = 1; l <= 6; l++) {
//                 fourth++
//             }
//             third++
//         }
//         second++
//     }
//     first++
// }

// total = first + second + third + fourth
// lolal = 3 * (1 + (4 * (1 + (5 * (1 + 6)))))

/*
Here, the formula is:
first = i
second = i * j
third = i * j * k
fourth = i * j * k * l

Total value of all the iterations will be:

Total = first + second + third + fourth
=> Total = i + (i * j) + (i * j * k) + (i * j * k * l)
=> Total = i + (i * j) + (i * j * k) + (i * j * k * l)
.
.
.
◉ Total = i(1 + j(1 + k(1 + l)))
Implies,
◉ Total = i(1 + j(1 + k(1 + l(1 + m(....(1 + (n-1)th_iter(1 + nth_iter)))))))
*/

// console.log(`The total is ${total} and lolal is ${lolal}`)

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        console.log(`Yeah 5!`)
        break
    }
    console.log(`i is ${i}`)
}

for (let i = 1; i < 10; i++) {
    if (i === 5) {
        console.log(`Yeah 5!`)
        continue
    }
    console.log(`i is ${i}`)
}