/*
// Data Time (Date object)

● The Date object returns the miliseconds that passed from January 1, 1970(the epoch) to the moment of execution of the line where "new Date()" is called. This could also be explained that it the Date at the moment of creation of the instance of the Date object.

● Apply different methods like "toString()", "toDateString()", "toLocaleString()"

● The type of Date is object.

● We can pass own Date also:

const var_name = new Date(year, month, day, hour, min, sec)

● Months start from 0, Days start from Monday.

● We can give formats like this

let var_name = new Date("MM-DD-YYYY")

They are changeable

● now() and getTime() return the miliseconds passed from the epoch. They can be used to make time stamps.

● When we are using toLocaleString(format, options), we can give different demands wrapped in an object in the options like:

let var_name = new Date.toLocaleString(`default`, {
    weekday: "long",
    timezone: 'UTC',
    ...
})

It allows to highly customize the date returned.
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
let date = new Date()
let date1 = Date.now()

console.log(date.getTime(), date1)