/*
// Conversions

● When working on backend, it is best to use "typeof" for all situation. This is because, whatever is sent to backend goes in the form of string; thus, it is must to know the type of information before using it in other operations.

● typeof var_name === typeof(var_name)

● "Number(var_name)" converts var_name into number. It also converts impure numbers(mixed with characters etc.), undefined and null into NaN, NaN and 0, which is unreliable.

● typeof NaN === number

● "Boolean(var_name)" is similar to Number(var_name).

● 1, 0 converts to true, false. A string converts to true, but an empty string converts to false

● String(var_name) is similar to Number(var_name)

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

● 

*/

let num = 50
let fullstr = "Hello"
let emptystr = ""
let tru = true
let fal = false
let one = 1
let zero = 0
let nul = null
let undef = undefined

let fullstrInNumber = Number(fullstr)
let emptystrInNumber = Number(emptystr)

let strInBool1 = Boolean(tru)
let strInBool2 = Boolean(fal)

let nlStr = String(nul)
let udStr = String(undef)

let nlNum = Number(nul)
let udNum = Number(undef)

let nlBol = Boolean(nul)
let udBol = Boolean(undef)

console.table([fullstrInNumber, emptystrInNumber, strInBool1, strInBool2, nlStr, udStr, nlNum, udNum, nlBol, udBol])