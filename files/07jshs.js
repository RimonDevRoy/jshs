/*
// Operations

● When numbers are being operated with strings, all the numbers to the right side of string will be converted to string and the numbers to the left side of string will be first operated and then concatenated with the resultant string. This type of action is not advised, just for knowing it is shown.

● In real world, the mentality of question solving is to be avoided, that is, writing code in the most easiest manner will be appreciated. We need not make expression hard enough to comprehend as they are given in exams and such situations.

● When multiple operators are used in a single line, it is better to use parenthesis to mention the priority of each operations.

● +(var_name) converts the var_name into other data type. This is also not advised.

● Readability is more prioritized than showing intelligence in programming. 

◉ Arithmetic Operators

• Addition (+):
This adds

• Subtraction (-):
This subtracts

• Multiplication (*):
This multiplies

• Division (/):
This divides

• Modulus (%):
This gives the remainder of a division

• Increment (++):
This increases the value by 1.
++a means increase value of a by 1 then give 'a'
a++ means first give 'a' then increase value by 1

• Decrement (--):
This decreases the value by 1.
--a means decrease value of a by 1 then give 'a'
a-- means first give 'a' then decrease value by 1

• Exponential (**):
This makes a ** b ** c .... as a^(b^(c^...))

◉ Assignment operator:

• x = y
This is assigning the value of y to x

• x += y
This is equal to x = x + y

• x -= y
This is equal to x = x - y

• x *= y
This is equal to x = x * y

• x /= y
This is equal to x = x / y

• x %= y
This is equal to x = x % y

• x **= y
This is equal to x = x ** y

• (Bitwise):
All bitwise operations in JS is done after converting all the values in 32bits.

Operator	Name	Description
&	        AND	    Sets each bit to 1 if both bits are 1
Example: 5(00000000000000000000000000000101)
       & 1(00000000000000000000000000000001)
       ---------
         1(00000000000000000000000000000001)

|	        OR	    Sets each bit to 1 if one of two bits is 1

^	        XOR	    Sets each bit to 1 if only one of two bits is 1

~	        NOT	    Inverts all the bits (This converts x to ((-x)-1))

<< Zero fill left shift, Shifts left by pushing zeros in from the right and let the leftmost bits fall off

>>	Signed right shift,	Shifts right by pushing copies of the leftmost bit in from the left, and let the rightmost bits fall off

>>>	Zero fill right shift, Shifts right by pushing zeros in from the left, and let the rightmost bits fall off


*/

// Arithmetic operators
let a = 10;
let b = 30;

console.log("a=10, b=30 the result of a + b is ", a + b);
console.log("a=10, b=30 the result of a - b is ", a - b);
console.log("a=10, b=30 the result of a * b is ", a * b);
console.log("a=10, b=30 the result of a / b is ", a / b);
console.log("a=10, b=30 the result of a % b is ", a % b);
console.log("a=10, b=30 the result of a++ is ", a++);
console.log("a=10, b=30 the result of a-- is ", a--);
console.log("a=10, b=30 the result of ++a is ", ++a);
console.log("a=10, b=30 the result of --a is ", --a);
console.log("a=10, b=30 the result of a ** b is ", a ** b);

// Assignment operators

{
    // x = y
    let c = 40;
    let d = 50;

    c = d;

    console.log("c=40, d=50 the result of c = y is ", c);
}

{
    // x += y
    let c = 40;
    let d = 50;

    c += d;

    console.log("c=40, d=50 the result of c += y is ", c);
}

{
    // x -= y
    let c = 40;
    let d = 50;

    c -= d;

    console.log("c=40, d=50 the result of c -= y is ", c);
}

{
    // x *= y
    let c = 40;
    let d = 50;

    c *= d;

    console.log("c=40, d=50 the result of c *= y is ", c);
}

{
    // x /= y
    let c = 40;
    let d = 50;

    c /= d;

    console.log("c=40, d=50 the result of c /= y is ", c);
}

{
    // x %= y
    let c = 40;
    let d = 50;

    c %= d;

    console.log("c=40, d=50 the result of c %= y is ", c);
}

{
    // x **= y
    let c = 40;
    let d = 50;

    c **= d;

    console.log("c=40, d=50 the result of c **= y is ", c);
}

// Bitwise operators
let e = 40;
let f = 70;

console.log("e=40, f=70 the result of e & f is ", e & f);
console.log("e=40, f=70 the result of e | f is ", e | f);
console.log("e=40, f=70 the result of !e is ", !e);
console.log("e=40, f=70 the result of e ^ f is ", e ^ f);
console.log("e=40, f=70 the result of e << 3 is ", e << 3); // Does shifting thrice
console.log("e=40, f=70 the result of e >> 3 is ", e >> 3); // Does shifting thrice
console.log("e=40, f=70 the result of e >>> f is ", e >>> 4);


/*
REPL: Read Evaluate Print Loop
This is a feat of node. This can be used as a calculator or many other things.
*/
