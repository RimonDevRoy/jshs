/*
// String

● In the modern times, it is best to write strings in backticks as they are easily readable and string interpolation can be done which makes it the most convenient way of declaring strings out there. Strings can also be made by the help of "" and ''

● The general syntax is:

`My name is ${name-var} and my age is ${age-var}`

● If any string method is needed to be used, use it inside the {} like ${name-var.ToUppercase}

● Multiple strings can be added by using + operator.

● Strings can also be declared using the String() method.

const str = new String("string_value")

● Strings and Arrays are treated as objects and that is why indices are found as keys and values are found as given values when they are inspected on dev tools etc.

● Any key of an object can be accessed by the syntax:

obj_name[index] // It will return the value at the index

And Arrays are also functions.

● A number of methods are available in prototype of anything such as objects.

● We can access an entity's prototype by:

var_name.__proto__

But the methods inside them can be accessed without having to write the __proto__ everytime.

● length property of strings show the number of characters in the strings

● 'toUppercase()' method converts all the characters of the string into capital letters. This does not alter the actual string data because strings are stored in stack.

● 'charAt(index)' method returns the character at the given index of the string

● 'indexOf('character')' method returns the index of the character in the string. If there are multiple same characters, the index of the first one coming in the string is returned.

● 'substring(strtind, endind)' returns the string that can be made starting from the strtind and the character before endind. If endind is more than possible then it counts upto the end of the string and length is equal to the previous string(if strtend is 0). It starts from 0 if -ve values are given in strtind, and is invalid if -ve is given in endind.

● 'slice' method is exactly like substring method but it also accepts negative values and these are the indices counted backwards.

● 'trim()' trims the extra things on both sides of the characters in the string. 'trimStart()' and 'trimEnd()' trim on the side that is written on the method.
Extra things = whitespaces, line terminators

● 'replace(`whattoreplace`, `whattoreplacewith`)' replaces the part of the string with the given value.

● 'includes(`ministring`)' return true or false based on whether the string contains the given part of string.

● 'split(`pattern`, limit)' returns an array with the substrings made from the string. The substrings are made with the help of the pattern. The number of substrings can never ecxeed limit. For exmaple,

let Str = `rimon-the-kutta`

let newStr = Str.split(`-`)

Expected
newStr = [rimon, the, kutta]

The split method broke the strings wherever it found `-`.

● Read documentation for knowing about strings in depth.

● 

*/

// let obj = {
//     0: `ronp`,
//     age: 50,
//     "public pass": "123456789"
// }

// let arr = [1, 2, 3]

// console.log(obj['0'])
// console.log(obj[0])
// console.log(obj["public pass"])
// console.log(arr['0'])
// console.log(arr[1])
// console.log(arr["2"])

// Strings

let str = `rimontherobotkutta`
let str2 = `   dog   `

console.log(str.indexOf('t'));
console.log(str.substring(0, 15));
console.log(str.slice(-8, 17));
console.log(str2.length);
console.log(str2.trim());
// console.log(str2.length); // Observe

let Str = `rimon-the-kutta-as`
let newStr = Str.split(`-`)
console.log(newStr);
console.log(words[0]);