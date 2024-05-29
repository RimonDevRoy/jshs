/*
// Loop -- Higher Order Functions

● forin, forof and foreach are specially for arrays and objects.

● Objects, arrays and strings are iterable.

● forof Syntax:

for (const/let iter_var of array/map/strings) {
  code
}

It returns the values of key-value pairs of the iterable.

● forin Syntax:

for (const/let iter_var in array/object/strings) {
  code
}

● foreach Syntax:

function func (iter_var, index, full_arr) {
  code
}

array_name.forEach(func)

or,

array_name.forEach( (iter_var, index, full_arr) {
  code
} )

● These loops will know by themselves when the iterable thing ends; thus, we do not need to give any conditions and all that. We just need iterator and iterable.

● Maps objects remember the insertion order of the key-value pairs. Maps are not iterable and for this forin loops cannot iter them. Syntax:

let var_name = new Map()

● set(`key`, value) adds the key-value pair.

● get(`key`) returns the value at the key in the map.

● `size` returns the number of key-value pairs in the map.

Example:

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

● forof loop returns key-value pairs for each iteration for map. To get key and value separately we need to destructure the key-value pair. Syntax:

for (const/let [key_var, val_var] of map_name) {
    code
}

● The hasOwnProperty() method of Object instances returns a boolean indicating whether this object has the specified property as its own property (as opposed to inheriting it like toString etc.). Syntax:

obj_name.hasOwnProperty(`property_name`)
or,
Object.hasOwnProperty.call(obj_name, property_name)

● JavaScript does not protect the property name hasOwnProperty; an object that has a property with this name may return incorrect results.

● The call() method of Function instances calls this function with a given this value and arguments provided individually. Syntax

function_name.call(thisArg)
function_name.call(thisArg, arg1)
function_name.call(thisArg, arg1, arg2)
function_name.call(thisArg, arg1, arg2, ...argN)

Example - 1:

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// Expected output: "cheese"

The `this` at Food function refers to the Food function given as `this` argument in call() to Product function. The `this` used in refers to the thing passed as thisArgument.

Example - 2:

function greet(name) {
  console.log(this.animal, "typically sleep between", this.sleepDuration);
  this.name = name
  console.log(name)
}

const obj = {
  animal: "cats",
  sleepDuration: "12 and 16 hours",
};

greet.call(obj, `wow`);
console.log(obj.name)

Example - 3:

If the first thisArg parameter is omitted, it defaults to undefined. In non-strict mode, the this value is then substituted with globalThis (which is akin to the global object).In strict mode,that is "use strict" used, the value of this is not substituted, so it stays as undefined.

globalThis.globProp = "Wisen";

function display() {
  console.log(`globProp value is ${this.globProp}`);
}

display.call(); // Logs "globProp value is Wisen"

● This is similar to how general-purpose utility functions work: instead of calling array.map(callback), you use map(array, callback), which allows you to use map with array-like objects that are not arrays (for example, arguments) without mutating Object.prototype.

● If we use obj_name.key_name directly then it takes key_name as a property inside the object; thus, it will give undefined.

● forEach loop travels inside the array and for this the parameter given in the callback assigns each value of key-value pair in array to itself in each round of loop.

● There is no need to name callback functions.

● Callbacks are functions that are passed as arguments to other functions.

● 

● 

*/

let arr = [`first`, `second`, `third`, `fourth`, `fifth`]
let str = `This is a string`
let obj = {
  ii: 50,
  iii: true,
  iiii: `L`,
  iiv: null,
  iv: function (params) { },
  ivi: {},
  ivii: []
}
let m = new Map()
m.set(`a`, 10)
m.set(`b`, 100)
m.set(`c`, 1000)
m.set(`d`, 10000)
m.set(`a`, 10) // This won't change the order of `a` in keys because it remembers. Objects update the order of keys if updated.

// forof
for (const i of arr) {
  console.log(`i in arr is ${i}`)
}

for (const i of str) {
  console.log(`i in str is ${i}`)
}

// for (const i of obj) {
//     console.log(`i in obj is ${i}`)
// } // Objects are not iterable with forof

for (const i of m) {
  console.log(i);
}

for (const [i, j] of m) {
  console.log(i, j);
}

console.log(m)

console.log(`------------------------------------------------------`)

// forin
for (const k in obj) {
  // if (Object.hasOwnProperty.call(object, key)) {
  //     const element = object[key];
  // }

  console.log(k, obj[k], obj[`${k}`], obj.k)
}

for (const k in arr) {
  console.log(k, arr[k]);
}

for (const k in m) {
  console.log(k, p);
}

// foreach
arr.forEach((iter) => {
  console.log(iter);
})

function lol(iter, ind, ar) {
  console.log(iter, ind, ar);
}

arr.forEach(lol)

// The data fetched from servers are often sent in objects wrapped in arrays.
let obj_in_arr = [
  {
    lang: `javascript`,
    name: `js`
  },
  {
    lang: `C++`,
    name: `cpp`
  },
  {
    lang: `python`,
    name: `py`
  }
]

obj_in_arr.forEach((iter) => {
  console.log(Object.entries(iter));
})
