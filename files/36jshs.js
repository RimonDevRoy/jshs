/*
// Events

● Applying event handlers in HTML is very ineffective, as it causes trouble when the program is scaled.

● Applying event handler by dotting the element is also not completely effective as it provides a few features compared to addEventListeners.

● addEventListeners is the best way to add event handlers to elements. Syntax:

element.addEventListener(`event_name`, (event_object) => {
    code
}, true/false)

● The third parameter in addEventListener is by default `false`.

● `attachEvent()` was used in earlier times to make the application compatible for Internet Explorer.

● `on` was a feature of jQuery

● Events are arised in Browser and Environment

● Learn these for interview: Types of Events, timestamps, preventDefault(), target, toElement, srcElement(very important), currentTarget, clientX, clientY, screenX, screenY, offset, altKey, ctrlKey, shiftKey, keyCode

● Event bubbling means the event handlers of children element are invoked first and then gradually it goes to parent element's event handler and so on like a bubble, and Event capturing is just the opposite scenario.

● The third parameter in addEventListener is about Event capturing that whether it is applicable(true) or not(false)

● Event handlers are asynchronous like.

● event.stopPropagation() stops the propagation of event handler.

● If there are multiple nested eventlisteners one after another inside, then the captured events are shown in serial before the bubbled ones.

● If an element has multiple children element, if the children element are interacted with, the event handler of the parent element is also invoked, but the target will be solely the interacted element itself.

● The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target.

Common targets are Element, or its children, Document, and Window, but the target may be any object that supports events (such as IDBRequest).

Syntax

addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)

Parameters
type
A case-sensitive string representing the event type to listen for.

listener
The object that receives a notification (an object that implements the Event interface) when an event of the specified type occurs. This must be null, an object with a handleEvent() method, or a JavaScript function. See The event listener callback for details on the callback itself.

options Optional
An object that specifies characteristics about the event listener. The available options are:

capture Optional
A boolean value indicating that events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. If not specified, defaults to false.

once Optional
A boolean value indicating that the listener should be invoked at most once after being added. If true, the listener would be automatically removed when invoked. If not specified, defaults to false.

passive Optional
A boolean value that, if true, indicates that the function specified by listener will never call preventDefault(). If a passive listener does call preventDefault(), the user agent will do nothing other than generate a console warning.

If this option is not specified it defaults to false – except that in browsers other than Safari, it defaults to true for wheel, mousewheel, touchstart and touchmove events. See Using passive listeners to learn more.

signal Optional
An AbortSignal. The listener will be removed when the given AbortSignal object's abort() method is called. If not specified, no AbortSignal is associated with the listener.

useCapture Optional
A boolean value indicating whether events of this type will be dispatched to the registered listener before being dispatched to any EventTarget beneath it in the DOM tree. Events that are bubbling upward through the tree will not trigger a listener designated to use capture. Event bubbling and capturing are two ways of propagating events that occur in an element that is nested within another element, when both elements have registered a handle for that event. The event propagation mode determines the order in which elements receive the event. See DOM Level 3 Events and JavaScript Event order for a detailed explanation. If not specified, useCapture defaults to false.

● 

● 

● 

● 

● 

● 

*/

const ull = document.querySelector(`ul`)
const l1 = document.querySelectorAll(`li`)[0]
const l5 = document.querySelectorAll(`li`)[4]
const l11 = document.querySelectorAll(`li`)[10]
const ol1 = document.querySelector(`#ol-li`)

/*
ull.addEventListener(`click`, (event) => {
    console.log(`ul clicked`);
    // event.stopPropagation()
    // event.stopImmediatePropagation()
}, true)

l5.addEventListener(`click`, (event) => {
    console.log(`list item 5 clicked`);
    // event.stopPropagation()
    // event.stopImmediatePropagation()
}, true)

ol1.addEventListener(`click`, (event) => {
    console.log(`ordered clicked`);
    // event.stopPropagation()
}, true)
*/

// Remove a list item on click
ull.addEventListener(`click`, function (event) {
    event.preventDefault()
    console.log(event.target.tagName);
    if (event.target.tagName === `P`) {
        const removeTarget = event.target.parentNode

        // removeTarget.remove()
        // or

        removeTarget.parentNode.removeChild(removeTarget)
    } else if (event.target.tagName === `A`) {
        const removeTarget = event.target.parentNode.parentNode

        removeTarget.remove()
    }
})
