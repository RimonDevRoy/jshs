/*
// Loop -- Filter, Map and Reduce

// Filter
● Filter is like forEach but it returns values of the iterable wrapped in an array. Syntax:

array.filter( (iter, index, full_arr) => {
    return condition_on_iter_evaluation
} )
or,
array.filter( (iter, index, full_arr) => condition_on_iter_evaluation )

● Only those values are returned that meet the provided condition.

● Multiple conditions can also be imposed upon iter_var.

// Map
● This method returns an array with the elements that are operationed on. Syntax:

array.map( (iter, index, full_arr) => operation_on_each_iter )

● Multiple map methods can be chained to conduct multiple operations. The operations are done in according to their order in the chain.

// Reduce
● This method reduces the whole array into a single value after doing certain operations on the values.

array.reduce( (accumulator, iter) => operation_on_each_iter, initial_value )

● At first, the initial_value is assigned to the accumulator. Then, the operation_on_each_iter is executed for value in the array and returned which is stored in accumulator after each operation. After the final round of loop, the accumulator with the final result is returned as the return value.

● callbackFn is invoked only for array indexes which have assigned values. It is not invoked for empty slots in sparse arrays.

● Syntax

reduce(callbackFn)
reduce(callbackFn, initialValue)

Parameters
callbackFn
A function to execute for each element in the array. Its return value becomes the value of the accumulator parameter on the next invocation of callbackFn. For the last invocation, the return value becomes the return value of reduce(). The function is called with the following arguments:

accumulator
The value resulting from the previous call to callbackFn. On the first call, its value is initialValue if the latter is specified; otherwise its value is array[0].

currentValue
The value of the current element. On the first call, its value is array[0] if initialValue is specified; otherwise its value is array[1].

currentIndex
The index position of currentValue in the array. On the first call, its value is 0 if initialValue is specified, otherwise 1.

array
The array reduce() was called upon.

initialValue (Optional)
A value to which accumulator is initialized the first time the callback is called. If initialValue is specified, callbackFn starts executing with the first value in the array as currentValue. If initialValue is not specified, accumulator is initialized to the first value in the array, and callbackFn starts executing with the second value in the array as currentValue. In this case, if the array is empty (so that there's no first value to return as accumulator), an error is thrown.

Return value
The value that results from running the "reducer" callback function to completion over the entire array.

● filter, map and reduce can also be chained. The method coming later will receive the iter_val after its operation done by the previous method.

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

// filter
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
]

let book = books.filter((bk) => bk.edition >= 2000 && bk.genre === `Science`)
// console.log(book);

// map
let a = [1, 2, 3]
let add = 0
console.log(a.map((iter) => {
    add++
    return iter + add
}));

console.log(a.map((iter) => iter * iter).map((iter) => iter + 1))

// reduce
let b = [10, 20, 25, 30]
let pointer = 0
let res = b.reduce((storer, iter) => storer * iter * iter, 1)

console.log(res);