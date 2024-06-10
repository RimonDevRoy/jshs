/*
// Numbers and Math

///////// Number //////////

● Normally, JS compiler recognizes the type of the variables, but we can explicitly define a number by the help of Number(value)

const var_name = new Number(value)

● Similarly like String, we have prototype in Number and several methods that can be used.

● 'toString()' method converts the number into a string.

● 'toFixed(value)' method takes number of digits to show after decimal point as value.

● 'toPrecision(range)' method returns a string of number equal to the number given as range. The starting of range is from non zero numbers.

● 'toLocaleString(`locale`, `options`) method returns a string of the number in the form of locale that is given. By default it is given in US format.

locale = language-region

///////////// Math ////////////

● 'abs(value)' returns the absolute value of the value given in the argument.

● 'round(value)' returns the rounded off value of the given value in the argument. It rounds the value to smaller integer if it is half or less in decimal range, and to bigger integer if it is more than half in decimal.

● 'ceil(value)' always rounds the value to bigger integer.

● 'floor(value)' always rounds the value to smaller integer.

● Whatever we need to operate on is to be given in the argument spot of the methods of Math object may it be variable or other inputs.

● 'min(v1, v2, v3, v4,..)' returns the minimum value among all the given values.

● 'max(v1, v2, v3, v4,..)' does vice-versa.

● 'random()' returns a random value in range of [0-1) everytime. We can shift by multiplying with the number that is equal to the shift, it basically means that if something starts from 'min' and then multiplied by 'x', then the starting point becomes 'min * x', that is, shifted by "min * (x - 1)" .We can add extra digits to ensure getting numbers in our range. We can add the minimum range to ensure getting at least the number that is minimum in the range. For example

    0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9
If multiplied by 5
    0.5 1 1.5 2 2.5 3 3.5 4 4.5 

    If 0.02 comes then 0.02*.5 = 0.1

● To get random numbers in desired range we can use the following formula:

(Math.random() * (range + 1)) + min

(Math.random() * (max - min + 1)) + min

or,

Math.floor/ceil(Math.random() * (max - min + 1)) + min/(min - 1)

● We add 1 to include the 'max'.

● To get a 'x' number of numbers starting from 1, we can use the following syntax:

Math.ceil(Math.random() * x)

● To get a 'x' number of numbers starting from 0, we can use the following syntax:

Math.floor(Math.random() * x)

● 

● 

● 

● 

*/

// Numbers
// const a = 50

// const b = new Number(100)

// console.log(a, b)

// const c = 25.5505
// console.log(c.toFixed(2))

// const d = 50.7986156
// console.log(d.toPrecision(5))

// const e = 0.0004580
// console.log(e.toPrecision(2))

// const f = 1000000
// console.log(f.toLocaleString(`en-IN`))

// Math
console.log(Math.abs(-5.6))
console.log(Math.round(4.2))
console.log(Math.round(4.9))
console.log(Math.min(4, 8, 9, -1))
console.log(Math.max(4, 7, 0.2, -30))
console.log(Math.ceil(7.1))
console.log(Math.floor(8.9))
console.log(Math.random())
console.log((Math.random() * (30 - 15 + 1)) + 15)
console.log(Math.floor(Math.random() * (30 - 15 + 1)) + 15)
console.log(Math.ceil(Math.random() * (30 - 15 + 1)) + (15 - 1))

