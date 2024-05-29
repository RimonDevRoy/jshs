/*
// Functions--2

● The ... operator can be used as spread and rest both depending on the scenario. If the scenario is such that it accepts multiple entries, it will work as rest and vice-versa.

● Elements taken into rest are stored in an array.

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

● 

● 

● 

● 

● 

*/

function cart(v1, v2, ...all) {
    return v1, v2, all
}

console.log(cart(5, 10, 15, 20, 25, 30, 35, 40))

function objtaker(obj) {
    console.log(`Username is ${obj.username}`)
}

function arrtaker(arr) {
    console.log(`The first entry is ${arr[0]}`)
}

const o = {
    username: "Wow"
}

const a = [1, 2, 3]

arrtaker(a)
objtaker(o)
