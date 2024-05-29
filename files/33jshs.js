/*
// DOM (New Element)

● Node.children returns the HTMLCollection of all children inside the node.

● Node.firstElementChild returns the first element node inside Node.

● Node.lastElementChild returns the last element node inside Node.

● Node.previousElementSibling returns the element node that is coming just before it in the document.

● Node.nextElementSibling returns the element node that is coming just after it in the document.

● Properties that do not have Element written in them are generally for all types of nodes, but those who have it are for element nodes only.

● Node.childNodes returns the Nodelist of the child nodes of all types(comment, text, element etc.) that are inside Node.

● element.appendChild(el) appends the el at the bottom of the element.

● Specific functions can be made for creating specific elements for the document and the values of its attributes etc. can be taken as arguments.

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

// Parent to children traverse
const parent = document.querySelector('.parent')

console.log(parent);
console.log(parent.children);
console.log(parent.children[1]);
console.log(parent.children[1].innerHTML);
console.log(parent.firstElementChild);
console.log(parent.lastElementChild);

// Children to parent, sibling traverse
const dayTwo = document.querySelectorAll('.day')[1]
console.log(dayTwo.parentElement);
console.log(dayTwo.nextElementSibling);
console.log(dayTwo.previousElementSibling);

// Children nodes amount
console.log(parent.childNodes);

// Creating new elements
const ele = document.createElement(`div`)

ele.className = `new class`
ele.id = `new id`
ele.setAttribute(`title`, `wow!`) // Preferable because it directly sets the attribute with value, but others like className, id, innerText etc first bring the reference and set values by overwriting.
ele.style.backgroundColor = `red`
ele.style.padding = `20px`
ele.innerText = `some content here`
 
let div_creator = (_id, _class, _att, childText) => {
    let div = document.createElement(`div`)
    div.setAttribute(`id`, `${_id}`)
    div.setAttribute(`class`, `${_class}`)
    div.setAttribute(`${_att.name}`, `${_att.value}`)
    div.innerHTML = childText
    return div
}

document.body.appendChild(div_creator(`randomidhere`, `randomclasshere`, { name: 'title', value: 'some title here' }, `some text content`))