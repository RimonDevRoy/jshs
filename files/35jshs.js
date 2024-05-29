/*
// Projects

● Live Preview is not available in incognito mode.

● Watch the initial portion of 35th video to know about starter code.

● Starter code basically means a structure of codd that stays as the initial code and does not does not change its initial form upon the user's alterations. It can be achieved in stackblitz, github etc.

● getComputedStyle(element) returns a CSSStyleDeclaration object of all possible Styles either added or not to the element along with some extra proeprties from its prototype.

● The parameter in the callback for an eventListener holds the Event Object.

● When a form is submitted, all the given values are sent to the URL of the server where the form was supposed to go. To extract values from the form on the frontend side, we have to stop the sending because if it is sent, how will we access the inputted values? If there were a backend side implemented on this page then the calculation could have been done on the backend side and the result could be just received.

● event.preventDefault() prevents the event from taking its default action. If it is expilicitly defined what should happen on the event, it will also be stopped, but it has to be written at the end of the callback defining what should happen on the event.

● The script runs right upon the page loaded. Thus, if we take values from form before the submit button is clicked,  values will be stored.

● toFixed(n) makes the number come in decimal point with `n` digits after point even if there is no need of point.

● setTimeout runs the callback after the given time from the moment of the execution of the line where it was declared.

● setInterval runs the callback after the given interval continuously.

● After doing some math, I found that multiplying Math.random() by a digit, the numbers are only shifted, and the limitting is done by .ceil or .floor. We can add a number which will act as the minimum value for random values.

● Math.random() returns from 0 to 0.9999999999999999....... 
It returns 0 randomly but never 1

● const num = Math.ceil(Math.random() * 100) + 1
Here, .ceil was not effective because in the case when randomly 100 generated, it would be 101, moreover, to make it 100 if 1 were even removed, it would be 0 when randomly 0 is generated. Both the scenario make the number of numbers equal to 101.

● // use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");

● `disabled` attribute disables the element to which it is applied.

● Complete line 320

● Observe:

function GFGexample(fact, callback) {
    let myFact = "GeeksforGeeks Is Awesome, " + fact;
    callback(myFact); // 2
}

function logFact(fact) {
    console.log(fact);
}
GFGexample("Learning is easy since", logFact);


● 

● 

*/

/*
P1-Page bg changer
P2-BMI Generator 
P3-Digital Clock
P4-Guess the number -> A game that takes inputs from the user and matches with the random number generated by the CPU and shows number of tries left and accomplished and also shows the previous guesses made by player.
*/

// |||||||||| OWN ||||||||||||
// ||||||| Project 1 |||||||||

// const box1 = document.getElementsByClassName(`box`)[0]
// const box2 = document.getElementsByClassName(`box`)[1]
// const box3 = document.getElementsByClassName(`box`)[2]
// const box4 = document.getElementsByClassName(`box`)[3]

// const resetBtn = document.getElementById(`reset`)

// const colorChanger1 = () => {
//     const bgColor = getComputedStyle(document.querySelector(`:root`)).getPropertyValue(`--COLOR-1`)

//     let bodyElem = document.body

//     bodyElem.style.backgroundColor = bgColor
// }

// const colorChanger2 = () => {
//     const bgColor = getComputedStyle(document.querySelector(`:root`)).getPropertyValue(`--COLOR-2`)

//     let bodyElem = document.body

//     bodyElem.style.backgroundColor = bgColor
// }

// const colorChanger3 = () => {
//     const bgColor = getComputedStyle(document.querySelector(`:root`)).getPropertyValue(`--COLOR-3`)

//     let bodyElem = document.body

//     bodyElem.style.backgroundColor = bgColor
// }

// const colorChanger4 = () => {
//     const bgColor = getComputedStyle(document.querySelector(`:root`)).getPropertyValue(`--COLOR-4`)

//     let bodyElem = document.body

//     bodyElem.style.backgroundColor = bgColor
// }

// const resetter = () => {
//     let bodyElem = document.body

//     bodyElem.style.backgroundColor = `#333`
// }

// box1.addEventListener(`click`, colorChanger1)
// box2.addEventListener(`click`, colorChanger2)
// box3.addEventListener(`click`, colorChanger3)
// box4.addEventListener(`click`, colorChanger4)

// resetBtn.addEventListener(`click`, resetter)
// box1.addEventListener(`click`, colorChanger1(1)) // Not possible
// box2.addEventListener(`click`, colorChanger1(2))
// box3.addEventListener(`click`, colorChanger1(3))
// box4.addEventListener(`click`, colorChanger1(4))



// ||||||| Project 2 |||||||||
// const frm = document.querySelector(`form`)

// const calc = (event) => {
//     event.preventDefault()

//     const height = parseFloat(document.querySelector(`height`).value)
//     const weight = parseFloat(document.querySelector(`weight`).value)
//     // They return the value of the element that is in the element at the moment of writing 122 123 lines.

// const res = document.getElementById(`result`)
//     res.innerHTML = `Your BMI Index is ${ (weight / ( height * height / 10000 )).toFixed(1) }`
// }

// frm.addEventListener(`submit`, (event) => {
//     event.preventDefault()

//     const height = parseFloat(document.querySelector(`#height`).value)
//     const weight = parseFloat(document.querySelector(`#weight`).value)
//     // They return the value of the element that is in the element at the moment of writing 122 123 lines.
//     const res = document.getElementById(`result`)

//     // if ((height <= 0 || isNaN(height) || height === ``) /* || or && */(weight <= 0 || isNaN(weight) || weight === ``)) {
//     //     // Observe why this won't give proper expected results
//     // }

//     if ((height <= 0 || isNaN(height) || height === ``)) {
//         res.innerHTML = `Please enter valid height`
//     } else if ((weight <= 0 || isNaN(weight) || weight === ``)) {

//         res.innerHTML = `Please enter valid weight`

//     } else {
//         let BMI = ( weight / (height * height / 10000) ).toFixed(1)

//         if (BMI < 18) {
//             res.innerHTML = `Your BMI Index is ${BMI}, so you are underweight`
//         } 
//         else if (BMI >= 18 && BMI <= 24) {
//             res.innerHTML = `Your BMI Index is ${BMI}, so you are Fit`
//         } 
//         else {
//             res.innerHTML = `Your BMI Index is ${BMI}, so you are overweight`
//         }
//     }
// })



// ||||||| Project 3 |||||||||

// const clock = document.getElementById(`clock`)
// let t = () => {
//     const time = new Date()
//     clock.innerHTML = `${time.toLocaleTimeString()}`
// }

// setInterval (t, 500)


// ||||||| Project 4 |||||||||

const frm = document.querySelector(`form`)
const guess_range = document.getElementById(`guess-range`)
const total_attempts = document.getElementById(`total-attempts`)
const prev_guesses = document.getElementById(`prev-guesses`)
const remain_guesses = document.getElementById(`remain-guesses`)
const matched_guess = document.getElementById(`matched-guess`)
const tryy = document.querySelector(`.try`)
const arr = document.querySelector(`.arr`)
const resultDiv = document.querySelector(`.resultDiv`)
const guess_input_field = document.getElementById(`guess`)
const achBtn = document.querySelector(`.achBtn`)
const achievementsDiv = document.getElementById(`achievements`)
let randomNum = Math.floor((Math.random() * 100) + 1)
console.log(randomNum);

let guess_counter = 1
let timesPlayed = 0 // we are declaring them with let because we need to increase or decrease their value.

let continueGame = true

// Achievements

function diver(attempt, result) {
    let d = document.createElement(`div`)

    d.innerHTML = `${attempt}. ${result}`
    achievementsDiv.appendChild(d)
}


// Guess validators and results
function validateGuess(guess) {
    if (isNaN(guess) || guess < 1 || guess > 100) {
        return true
    } else {
        return false
    }
}

function compareGuess(guess) {
    tryy.innerHTML = 10 - guess_counter
    if (guess_counter >= 10) {
        diver(timesPlayed, `lost`)
        gameEnd()
        displayAnyMessage(`You want to start a new game?`)
    } else if (validateGuess(guess)) {
        cleanPrevGuess()
        displayAnyMessage(`Please enter a valid guess`)
    } else {
        if (guess < randomNum) {
            displayAnyMessage(`Your guess is less than the number`)
            arr.innerHTML += `${guess} `
            guess_counter++
            cleanPrevGuess()
        } else if (guess > randomNum) {
            displayAnyMessage(`Your guess is higher than the number`)
            arr.innerHTML += `${guess} `
            guess_counter++
            cleanPrevGuess()
        } else {
            displayAnyMessage(`Congratulations! You have guessed the number correctly`)
            guess_input_field.setAttribute(`disabled`, ``)
            gameEnd()
            diver(timesPlayed, `Won`)
            displayAnyMessage(`You want to start a new game?`)
        }
    }
}

function cleanPrevGuess() {
    guess_input_field.value = ``
}

function displayAnyMessage(message) {
    matched_guess.innerHTML = message
}

function gameEnd() {
    continueGame = false
    timesPlayed++
}

function gameRestart() {
    guess_input_field.removeAttribute(`disabled`)
    continueGame = true
    guess_counter = 0
    arr.innerHTML = ``
    cleanPrevGuess()
}


document.getElementById(`subt`).addEventListener(`click`, (event) => {
    event.preventDefault()

    if (continueGame) {
        compareGuess(guess_input_field.value)
    }
})




matched_guess.addEventListener(`click`, () => {
    gameRestart()
})

achBtn.addEventListener(`click`, () => {
    achievementsDiv.classList.toggle(`disp`)
})

// -------------------------------


// |||||||||||||||||||||||||||||||| HITESH SIR |||||||||||||||||||||||||||||||||||

// ||||||| Project 1 |||||||||


// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector('body');

// buttons.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click', function (e) {
//         console.log(e);
//         console.log(e.target);
//         if (e.target.id === 'grey') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'white') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'blue') {
//             body.style.backgroundColor = e.target.id;
//         }
//         if (e.target.id === 'yellow') {
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });


// // ||||||| Project 2 |||||||||


// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     const height = parseInt(document.querySelector('#height').value);
//     const weight = parseInt(document.querySelector('#weight').value);
//     const results = document.querySelector('#results');

//     if (height === '' || height < 0 || isNaN(height)) {
//         results.innerHTML = `Please give a valid height ${height}`;
//     } else if (weight === '' || weight < 0 || isNaN(weight)) {
//         results.innerHTML = `Please give a valid weight ${weight}`;
//     } else {
//         const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//         //show the result
//         results.innerHTML = `<span>${bmi}</span>`;
//     }
// });



// // ||||||| Project 3 |||||||||


// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock')

// setInterval(function () {
//     let date = new Date();
//     // console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString();
// }, 1000);


// // ||||||| Project 4 |||||||||

// let randomNumber = parseInt(Math.random() * 100 + 1);

// const submit = document.querySelector('#subt');
// const userInput = document.querySelector('#guessField');
// const guessSlot = document.querySelector('.guesses');
// const remaining = document.querySelector('.lastResult');
// const lowOrHi = document.querySelector('.lowOrHi');
// const startOver = document.querySelector('.resultParas');

// const p = document.createElement('p');

// let prevGuess = [];
// let numGuess = 1;

// let playGame = true;

// if (playGame) {
//     submit.addEventListener('click', function (e) {
//         e.preventDefault();
//         const guess = parseInt(userInput.value);
//         console.log(guess);
//         validateGuess(guess);
//     });
// }
// After thinking for minutes I have reached to the conclusion that when event handler for `submit` was triggered, as it was inside the `if` statement checking  `playGame`, the program had to run through the if statement before reaching the event handler. That's why, each time the event handler was triggered, the if statement was validated.

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert('PLease enter a valid number');
//     } else if (guess < 1) {
//         alert('PLease enter a number more than 1');
//     } else if (guess > 100) {
//         alert('PLease enter a  number less than 100');
//     } else {
//         prevGuess.push(guess);
//         if (numGuess === 11) {
//             displayGuess(guess);
//             displayMessage(`Game Over. Random number was ${randomNumber}`);
//             endGame();
//         } else {
//             displayGuess(guess);
//             checkGuess(guess);
//         }
//     }
// }

// function checkGuess(guess) {
//     if (guess === randomNumber) {
//         displayMessage(`You guessed it right`);
//         endGame();
//     } else if (guess < randomNumber) {
//         displayMessage(`Number is TOOO low`);
//     } else if (guess > randomNumber) {
//         displayMessage(`Number is TOOO High`);
//     }
// }

// function displayGuess(guess) {
//     userInput.value = '';
//     guessSlot.innerHTML += `${guess}, `;
//     numGuess++;
//     remaining.innerHTML = `${11 - numGuess}`;
// }

// function displayMessage(message) {
//     lowOrHi.innerHTML = `<h2>${message}</h2>`;
// }

// function endGame() {
//     userInput.value = '';
//     userInput.setAttribute('disabled', '');
//     p.classList.add('button');
//     p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
//     startOver.appendChild(p);
//     playGame = false;
//     newGame();
// }

// function newGame() {
//     const newGameButton = document.querySelector('#newGame');
//     newGameButton.addEventListener('click', function (e) {
//         randomNumber = parseInt(Math.random() * 100 + 1);
//         prevGuess = [];
//         numGuess = 1;
//         guessSlot.innerHTML = '';
//         remaining.innerHTML = `${11 - numGuess} `;
//         userInput.removeAttribute('disabled');
//         startOver.removeChild(p);

//         playGame = true;
//     });
// }
