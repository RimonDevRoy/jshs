/*
// DOM

● DOM means Document Object Model. The HTML document is made up of different objects like head tag, body tag etc. They are treated as objects and that's why we can access children of document through object syntax.

● The model means how the HTML document is structured, how the objects are placed. More like a map of where things are in the document.

● `document` is a property of `window` object in the browser.It is so commonly used now that we can directly access the `document` without referring to window object.

● If we console.log the direct document then we will get only the HTML document wrapped in an object, but if we console.dir the document we will get many other properties along with HTML document wrapped in an object.

● Document starts from the html tag.

● The flow diagram is as below:

                Window
                  |
               Document
                  |
                 HTML
                /   \
    title  - Head    Body - other children
             /       |  \
     meta tags     tags  script
                    |
                attributes, children

This goes on.

● Every element in the model is also called node.

● Some tags contain texts as final children that are called text nodes. Attributes are also children of tags. Basically everything about a tag, be it attribute or text node or further children tags, except itself are children of the tag. 

● `baseURI` property of document returns the base URL/URI of the webpage.

● `links` property of document returns all the links on the webpage. links[index] returns the link at index on the webpage.

● HTMLCollection, nodeCollection and array are not the same thing. Collections can be converted to arrays.

● `getElementById(`id_name`)` returns the element with the given id name.

● `element.innerHTMl` returns the element's inner structure and it can also be overwritten by assigning the structure inside a string.

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

let div = document.getElementById(`bg-black`)

div.innerHTML = `Changed`