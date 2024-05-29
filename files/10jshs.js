/*
// Stack and Heap

● In earlier languages, the memory control was on the programmer, but modern languages do garbage collection by themselves.

● Memory is of two types:
1. Stack 2. Heap

● Stack: This memory is used for primitive data type data.

● Heap: This memory is used for non-primitive data type data.

● The real reason why arrays used to change when any method were applied on them is because their direct reference were always returned and any change made on that arrays changed the whole array.

● In stack, the variables are stacked on top of each other and they go in the stack in the order of their declaration in the code. Whenever a variable is called from the stack, it returns a copy of the variable and the copy is stacked on above the variable that needs the previously declared variable(speculation till now).

● In heap, the variable made to store the non-primitive data is stored in stack and the data is stored in heap, but the variable has the direct reference of the data from the heap. When a new variable made with the previously made variable that has the reference of data from heap, it also has the direct reference of the data from the heap.

● If numbers are given as indices in objects, they are to be given inside strings otherwise they would show error. 

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

let var1 = 50
let var2 = var1
var2 = 20

console.log(var1, var2)

let arr1 = [50, 60, 80]
let arr2 = arr1
arr2[0] = 100

let obj1 = {
    age: 50
}

let obj2 = obj1
obj2.age = 500

console.log(arr1, arr2, obj1, obj2);