/*
// Array Functions 

● To merge two arrays in desi style, we can use the following syntax:

newArr.push(oldArr[0], oldArr[1],..)

● If there are many arrays nested inside, we can access elements by the following syntax:

if arrrr inside arrr inside arr,

arr[index_arr][index_arrr][index_arrrr]

● ar.concat(arr) returns a new array, that is the concatination of the two arrays.

● Spread operator spreads every element inside the thing with which it is used. It is shown by -> (...). This can be used to give elements individually inside something.

const newArr = [...arr1, ...arr2, ...arr3,.......]

arr1 and all other arrays will spread until the comma after it.

● If there are many layers of arrays nested, we can use flat(depth) to put all the elements into one single array. Depth is the level of layer upto which flat() needs to operate.

● "Infinity" is a keyword and it can be used in such places where a number is expected, and this will make the number be counted upto the max possible value of something.

● We can check if something is array or not by:

Array.isArray(thing)

● We can convert anything into an Array by:

Array.from(thing)

● When converting objects into arrays, we have to specify whether to make array of the keys or values of the object. Another thing to remember is that if anytime any prblem arises while making array, an empty array will be returned.

● We can convert a number of things into an array by:

Array.of(el1, el2, el3,..)

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

const mvl_her = [`Spiderman`, `Captain`, `Ironman`]
const dc_her = [`Flash`, `Birdman`, `Catman`]

console.log(mvl_her.concat(dc_her))
console.log(mvl_her.push(...dc_her))

const layerd = [1, 2, 3,[3, 4], 4, 5, [5, 6, [6, 7, 8,[8, 9, [9, 10, [10, 11, [11, 12]]]]]], 6, 7]
console.log(layerd.flat(1))
console.log(layerd.flat(2))
console.log(layerd.flat(3))
console.log(layerd.flat(Infinity))

console.log(Array.isArray(layerd))

console.log(Array.from("Wow"))

console.log(Array.from({age: 20}))

console.log(Array.of(mvl_her, dc_her))
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()
// console.log()