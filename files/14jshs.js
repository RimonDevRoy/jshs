/*
// Array

● Arrays are collections of data stored under a single variable. The data inside an array could be of different types such as number, string, null, object, function etc.
Arrays in JS can be either contiguous or non-contiguous.

Syntax:

const arr_name = [el1, el2, el3, el4, el5, ...]

● JS arrays are resizable, that is, the number of elements can be decreased or increased even after their creation as they are mutable. They can be either contiguous or non-contiguous. A JS array is an object and therefore it supports methods, properties etc.

● Each element inside arrays can be accessed by putting index, which starts from 0. Syntax:

arr_name[index]

● Shallow Copy: Shallow copy of an object is such a copy whose properties and methods and other things share the direct reference of of the original data.

● Deep Copy: Deep copy of an object object is such a copy whose properties and methods and other things do not share the direct reference of the original data.

● Arrays can also be declared using Array()

const arr_name = new Array(el1, el2, el3,...)

● push(e1, e2,..) inserts the given elements in the array in the same order at the end.

● pop() pops the last element of the array no matter what argument is given.

● unshift(e1, e2, e3,..) inserts elements in the given order to the beginning of the array. This is a troublesome method because in order to add an element at the beginning, the computer has to shift all the elements to the right one by one. This puts pressure to the computer. This is implied from the change of index of the elements in the array. This gives the lesson that whenever and wherever there is even a slight change in something in the program and inner structure of the program, there is some work done by computer. And Every change is an INDIVIDUAL WORK by computer. Thus, the more the changes, the more workload is on computer.

● shift() pops the first element of the array. 

● includes(element) returns true / false depending on whether the array contains the element.

● indexOf(element) returns the index of the given element. If mutltiple elements of same value is present, the index of first element having multiple entries is returned. Returns abnormal value if the element is not in the array.

● join() binds all the elements and puts them into a string.

● slice(strt, end) returns an  array starting from the strt to end(exclusive). If end is not not given, it wil return from strt to all the rest elements. If no argument is given, it will return the whole array.

● To create a new array with a segment removed and/or replaced without mutating the original array, use toSpliced(). To access part of an array without modifying it, see slice().

● splice() returns a segment of original array according to the given parameters. It by default is end inclusive and also modifies the original array.

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,.. itemN)

start
Zero-based index at which to start changing the array, converted to an integer.

Negative index counts back from the end of the array — if -array.length <= start < 0, start + array.length is used.
If start < -array.length, 0 is used.
If start >= array.length, no element will be deleted, but the method will behave as an adding function, adding as many elements as provided.
If start is omitted (and splice() is called with no arguments), nothing is deleted. This is different from passing undefined, which is converted to 0.

deleteCount Optional
An integer indicating the number of elements in the array to remove from start.

If deleteCount is omitted, or if its value is greater than or equal to the number of elements after the position specified by start, then all the elements from start to the end of the array will be deleted. However, if you wish to pass any itemN parameter, you should pass Infinity as deleteCount to delete all elements after start, because an explicit undefined gets converted to 0.

If deleteCount is 0 or negative, no elements are removed. In this case, you should specify at least one new element (see below).

item1, …, itemN Optional
The elements to add to the array, beginning from start.

If you do not specify any elements, splice() will only remove elements from the array.

Return value
An array containing the deleted elements.

● The last element of an object can be accessed by putting "(object_type.length - 1)" at index.

● splice() removes or adds elements to the spot of index or before index respectively.

● 

● 

● 

*/

const arr1 = [1, `Wow`, {"prop": 1}, ()=> {console.log("Hi")
return 0}]

console.log(arr1[3]()) // Notice

const myArr = [1, 2]
const newArr = [0, 1, 2, 3, 4, 5, 6 ,7, 8, 9, 10]

console.log(myArr)

myArr.push(10, 5, 10, 5)
console.log(myArr)

myArr.pop(1)
console.log(myArr)

myArr.unshift(50, 100)
console.log(myArr)

myArr.shift(100)
console.log(myArr)

console.log(myArr.includes(10))
console.log(myArr.indexOf(10))

const a = arr1.join()
console.log(a)

const nArr = newArr.slice(0, 5)
console.log(newArr)
console.log(nArr)

nArr[2] = 100
console.log(newArr)
console.log(nArr)

const neArr = newArr.splice(0, 5)
console.log(newArr)
console.log(neArr)

neArr[2] = 500
console.log(newArr)
console.log(neArr)

const arrr = [10, 20, 30, 40, 50, 60, 70]
const arrr2 = arrr.splice(2, null, 100, 200)

const ra = [100, 200, 300, 400, 500, 600]
const ra2 = ra.splice(2, 1)

console.log(arrr)
console.log(arrr2)
console.log(ra)
console.log(ra2)