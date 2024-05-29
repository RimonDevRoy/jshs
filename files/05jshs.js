/*
// Data Types

● "use strict" written on the top of program instructs to see the code to be written based on newer standards. At the present, we do not even need to write this, everthing is by default taken as written in newer standard.

● Some browser based functionalities like alert() etc. cannot be directly run on node.js, but can be written in a way that node.js can run it.

● In JS, semicolons are preferably avoided.

● Code readability should be high.

● The original documentation for JS is "tc39.es" with ECMAsript standards."MDN" is also preferable.

● There are a number of data types:

Primitve data types:
1. String: A collection of characters

2. Number: Numbers within the range of 2^53

3. Boolean: Either true or false

4. Bigint: Numbers with extremely large range especially needed for stock market etc. places.

5. Null: It is a stand alone value as well as a data type. It represents emptiness, not 0 because 0 is also a value.

6. Undefined: A declared variable that is not defined.

7. Symbol: It represents uniqueness, it is highly used in React.js

● Object:

● typeof null is "object", which is an error made in the initial times of making JS as per ECMA standards. It is not null but rather a special value in itself that represents emptiness.

● A BigInt value, also sometimes just called a BigInt, is a bigint primitive, created by appending n to the end of an integer literal, or by calling the BigInt() function (without the new operator) and giving it an integer value or string value.

const previouslyMaxSafeInteger = 9007199254740991n;

const alsoHuge = BigInt(9007199254740991);
// 9007199254740991n

const hugeString = BigInt("9007199254740991");
// 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff");
// 9007199254740991n

const hugeOctal = BigInt("0o377777777777777777");
// 9007199254740991n

const hugeBin = BigInt(
  "0b11111111111111111111111111111111111111111111111111111",
);
// 9007199254740991n

● BigInt values are similar to Number values in some ways, but also differ in a few key matters: A BigInt value cannot be used with methods in the built-in Math object and cannot be mixed with a Number value in operations; they must be coerced to the same type. Be careful coercing values back and forth, however, as the precision of a BigInt value may be lost when it is coerced to a Number value.

● typeof 1n === "bigint"; // true
typeof BigInt("1") === "bigint"; // true
typeof Object(1n) === "object"; // true

● Symbol is a built-in object whose constructor returns a symbol primitive — also called a Symbol value or just a Symbol — that's guaranteed to be unique. Symbols are often used to add unique property keys to an object that won't collide with keys any other code might add to the object, and which are hidden from any mechanisms other code will typically use to access the object. That enables a form of weak encapsulation, or a weak form of information hiding.

Every Symbol() call is guaranteed to return a unique Symbol. Every Symbol.for("key") call will always return the same Symbol for a given value of "key". When Symbol.for("key") is called, if a Symbol with the given key can be found in the global Symbol registry, that Symbol is returned. Otherwise, a new Symbol is created, added to the global Symbol registry under the given key, and returned.


To create a new primitive Symbol, you write Symbol() with an optional string as its description:


const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");

The above code creates three new Symbols. Note that Symbol("foo") does not coerce the string "foo" into a Symbol. It creates a new Symbol each time:

Symbol("foo") === Symbol("foo"); // false
The following syntax with the new operator will throw a TypeError:

const sym = new Symbol(); // TypeError

● If you really want to create a Symbol wrapper object, you can use the Object() function:

const sym = Symbol("foo");
typeof sym; // "symbol"
const symObj = Object(sym);
typeof symObj; // "object"

● 

● 

● 

● 

● 

● 

● 

● 

*/

"use strict";

let num = 15000
let str1 = "helloboy"
let str2 = 'helloboy'
let str3 = `${str1}`
let undef = undefined
let nl = null
let bol = true
let bigi1 = 124865865654987689n
let bigi2 = BigInt(124865865654987689n);
let sym = Symbol("wow")

let obj = {}

let obj1 = Object(sym)

console.table([typeof num, typeof str1, typeof str2, typeof str3, typeof undef, typeof nl, typeof bol, typeof bigi1, typeof bigi2, typeof sym, typeof obj, typeof obj1])