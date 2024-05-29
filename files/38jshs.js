/*
// Async Projects

● setTimeout, setInterval etc are methods of Global Window Object. They are available through browser.

● They are not part of core JS. Core JS consists only of Call Stack and Memory.

● Syntax:
const myFunc = a_function

// setTimeout
setTimeout( (parameters) => {
    code
}, timeout_in_milisec, arguments_to_function )
or
setTimeout(myFunc, timeout_in_milisec, arguments)

// setInterval
setInterval( (parameters) => {
    code
}, timeout_in_milisec, arguments_to_function )
or
setInterval(myFunc, timeout_in_milisec, arguments)

● timeout and interval defaults to 0 if not specified.

● setTimeout and setInterval return timeoutID and intervalID which are unique to each method.

● It may be helpful to be aware that setInterval() and setTimeout() share the same pool of IDs, and that clearInterval() and clearTimeout() can technically be used interchangeably. For clarity, however, you should try to always match them to avoid confusion when maintaining your code.

● The delay argument is converted to a signed 32-bit integer. This effectively limits delay to 2147483647 ms, roughly 24.8 days, since it's specified as a signed integer in the IDL.

● Both setTimeout and setInterval have problems with `this`

● JS Engine execution thread is the main thread. The asynchronous executions are executed in seperate newly made thread.

● The given function to setTimeout and setInterval API is executed upon the arrival of given time.

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

// const myFunc = (n1, n2, n3) => {
//     console.log(n1 + n3 + n2);
// }

// setTimeout(myFunc, 2000, 100, 200, 300)

// setInterval(myFunc, 500, 10, 50, 140)



// Project 1

// const strt = document.querySelector(`.start`)
// const stop = document.querySelector(`.stop`)
// const statusDiv = document.querySelector(`.status`)
// const pageBody = document.querySelector(`body`)

// const colorGenerator = function () {
//     let h0 = Math.floor(Math.random() * 10)
//     let h1 = Math.floor(Math.random() * 10)
//     let h2 = Math.floor(Math.random() * 10)
//     let h3 = Math.floor(Math.random() * 10)
//     let h4 = Math.floor(Math.random() * 10)
//     let h5 = Math.floor(Math.random() * 10)
//     console.log(`#${h0}${h1}${h2}${h3}${h4}${h5}`);

//     return `#${h0}${h1}${h2}${h3}${h4}${h5}`
// }

// or,

// const colorGenerator = () => {
//     const hex = `0123456789abcdef`
//     let color = `#`
//     for (let i = 1; i <= 6; i++) {
//         color += hex[Math.floor(Math.random() * 10)]
//     }
//     console.log(color);
//     return color
// }

// // let changeInterval = null // Not necessary as !variable checks if it is null or undefined
// let changeInterval

// const bgChanger = (event) => {
//     console.log(event.target)

//     /*
//     Safety check. We cannot directly assign anything into  `null` as changeInterval is representing here. To solve that, we instruct to check that if the variable is `null` and if it is, then assign a setInterval. Otherwise, setInterval would be executed perfectly but the intervalID won't be stored in the variable.
//     */
//     if (!changeInterval) {
//         changeInterval = setInterval(() => {
//             pageBody.style.backgroundColor = colorGenerator()
//         }, 1000)
//     }
// }

// const stopper = () => {
//     clearInterval(changeInterval)
//     changeInterval = null
//     // I think it is a good practise to free the intervalID holder. It releases memory which eases the computer.
// }


// strt.addEventListener(`click`, bgChanger)
// stop.addEventListener(`click`, stopper)


// Project 2

// This event occurs on the window level because pressing keyboard is out of the context of events inside program.
window.addEventListener(`keydown`, function (event) {
    const tb = document.querySelector(`.tb`)

    const tableRow = document.createElement(`tr`)

    tableRow.innerHTML = `
            <td>${event.key === ` ` ? `Space` : event.key}</td>
            <td>${event.code}</td>
            `
    
    tb.appendChild(tableRow)

    // or

    // tb.innerHTML += `
    // <tr>
    //     <td>${event.key}</td>
    //     <td>${event.code}</td>
    // </tr>
    //     `
})

// There is a difference between `` and ` `