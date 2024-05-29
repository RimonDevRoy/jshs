/*
// Closure (Lexical Scoping)

● Lexical scoping is the phenomenon of availability of properties and methods of outer functions inside inner functions.

● When a function is returned, it is bundled with its own scope and its lexical scope(if exists), that is, the scope of its outer function. Not only lexical scope, the function is returned with all the necessary references' scope from the memory. This keeps the function intact. This is called 'Closure'

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

// Complex example
let innerFunc = 0
function outerFunc() {
  const outerProperty = 50
  function inFunc() {
    const inProperty = 40
    function innerFunc () {
      const innerProperty = 30
      console.log(`outerProperty, inProperty and innerProperty:`, outerProperty, inProperty, innerProperty)
    }
    return innerFunc
  }
  const taker = inFunc()
  return taker
}

const taker = outerFunc()
taker()


// Practical Example

function clickHandle(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`
  }
  return function (color) {
    document.body.style.backgroundColor = `${color}`
  }
  // This won't work because the moment we define a parameter for this function, the `color` used in BgColor is obtained from the parameter, and the parameter receives a value when the function is called.
}

document.getElementById(`btn1`).onclick = clickHandle('orange')

document.getElementById(`btn2`).onclick = clickHandle('green')

// Instead of
// document.getElementById(`btn1`).onclick = function () {
//   document.body.style.backgroundColor = `${color}`
// }
// This approach needs modification for each button color.



