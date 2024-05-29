/*
// Control Flow / Logic Flow

● Logic Flow is the flow of code execution based on control of conditions. The control flows are:

1. if (condition) {
        code
    }
The code in the scope of `if` will run if the condition given is true.

2. if (condition) {
    code
} else {
    code
}
If the condition is true, the code inside the scope of `if` will run, but if the condition is false, the code inside the scope of `else` will run.

3. if (condition) code1, code2, code3; (not prefered)

if (condition) code1; (prefered) 

4. if (condition) {
    code
} else if (condition) {
    code
} else if (condition) {
    code
}
.
.
.
} else {
    code
}
At first, the condition of `if` will be checked, if false, the condition of first `else if` will be checked and so on. The block whose condition is found true will be executed and the blocks under it will be ignored. If no blocks are found to have true conditions, `else` will run anyway. In if-else ladder the conditions are to be checked from the priority aspect, that is, the conditions that are to be checked before others are to be put at the top.

5. switch (key) {
    case check_value1:
        code1
        break;
    case check_value2:
        code2
        break;
    case check_value3:
        code3
        break;
    case check_value4:
        code4
        break;
    .
    .
    .
    default:
        break;
}
The respective case will run whose check_value matches the value of `key`. The `key` is the variable whose value checking is the condition checking. If no case is true, default case runs. `break` makes the control flow to break and here it is used because in switch-case statement, if one case is found true, all the cases under it will also run without even checking their conditions.

● condition1 && condition2 && ...

It will be true if all the conditions are true.

● condition1 || condition2 || condition3 || ....

It will be true if atleast one of them is true.

● Some values can be truthy or falsy. 
Falsy values:
false, 0, -0, BigInt 0n, ``, null, undefined, NaN

Truthy values:
`0`, `false`, ` `, [], {}, function(){}

● To check empty arrays, we can use the `length` property for that array.

● To check empty objects, we can use the `Object.keys(obj_name).length` for that object.

● Nullish Coalescing Operator (??):
This works based on `null` and `undefined`.

LeftExpression ?? RightExpression

If the LeftExpression is `null` or `undefined` the RightExpression is returned otherwise, the LeftExpression is returned. We can use the values received from DB in the leftexpression to check whether values have come or not. (Always think of substituting real variables in the place of commonly shown values to understand the concept clearly.)

exp1 ?? exp2 ?? exp3 ?? ...

The first ever expression that is a value other than `null` or `undefined` is returned.

● Terniary Operator (?):

condition ? true_statement : false_statement

true_statement runs if the condition is true and vice-versa. To chain multiple condition checkings, we can put next condition in place of false and so on.

condition1 ? true_statement1 : condition2 ? true_statement2 : ...
conditionN ? true_statementN : false_statement

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

function f() {
    return null
}

function g() {
    return `Done`
}

v = f() ?? g()

console.log(v);

let price = 50
let MRP = 100

if (true) {
    console.log(`Wow`);
}

if (price === 50 && MRP <= 40) {
    console.log(`Both low`);
} else if (price === 50 || MRP <= 200) {
    console.log(`One low other high`);
} else {
    console.log(`Nothing`);
}

price > 60 ? console.log(`Passed`) : price > 70 ? console.log(`Failed`) : price > 40 ? console.log(`Now Done`) : console.log(`Lol`);

if (true) console.log(`Implicit 1`), console.log(`Implicit 2`);

let val = 80

switch (val) {
    case 20:
        console.log(`Is 20`);
        break;
    case 40:
        console.log(`Is 40`);
        break;
    case 60:
        console.log(`Is 60`);
        break;
    case 80:
        console.log(`Is 80`);
        break;
    case 100:
        console.log(`Is 100`);
        break;

    default:
        break;
}