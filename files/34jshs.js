/*
// DOM (Edit, Remove )

● Always of think of making a function of a piece of code that does soemthing specific so that the function can be called to do that task everytime with ease.

● element.createTextNode(`text`) makes a text node in the element.

● It is recommended to append textNodes / textContents instead of using innerHTML in an element when adding elements.

● It is recommended to use replaceWith() to edit an element. We create a lookalike element with the edited features and over write it. Syntax:

replaceable_elem.replaceWith(replacing_elem)

● element.remove() removes the element from the document flow.

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
let attributes = [
    {
        name: `title`,
        value: `random_title`
    },
    {
        name: `class`,
        value: `random_class`
    },
    {
        name: `id`,
        value: `random_id`
    },
]

function create(el, att_obj, text) {
    let ele = document.createElement(`${el}`)
    
    for (let i = 0; i < att_obj.length; i++) {
        ele.setAttribute(`${att_obj[i].name}`, `${att_obj[i].value}`)
    }

    ele.innerText = text
    
    return ele
}

function appender(id_cont, elem) {
    if (id_cont === null) {
        document.body.appendChild(elem)
    } else {
        document.getElementById(`${id_cont}`).appendChild(elem)
    }
}


// Add
appender(`language`, create(`li`, attributes, `Python`))
appender(`language`, create(`li`, attributes, `TypeScript`))
appender(`language`, create(`li`, attributes, `C++`))


// Edit
const secondLang = document.querySelector(`li:nth-child(2)`)
secondLang.textContent = `Py`

// or

const newLi = document.createElement(`li`)
newLi.textContent = `R`
secondLang.replaceWith(newLi)

// or

const firstLang = document.querySelector(`li:first-child`)
firstLang.outerHTML = `<li>Java</li>`


// Remove

const thirdLang = document.querySelector(`li:nth-child(3)`)
thirdLang.remove()