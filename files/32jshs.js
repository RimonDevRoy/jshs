/*
// Nodelist (HTML Collection)

● getElementById(`id_name`) returns the element with the given id_name.

● element.id returns the id of the selected element.

● element.className returns the class of the selected element. Although we write class as attribute everywhere, document sees it as className under the hood.

● In JSX, we write className not class.

● element.getAttribute(`attribute_name`) returns the value of the attribute_name

● element.setAttribute(`attribute_name`, `attribute_value`) sets the attribute with the given value in the element. It always overwrites the pre-existing classes, for that reason, we also have to write the pre-existing classes along with the new one.

● element.style.style_name = `value` sets inline styles with the given values in the element.

● style_names are formatted in JS like:

background-color -> backgroundColor

● element.innerText returns the visible text inside the element.

● element.textContent returns all the text inside the element be it visible or not(display: none, hidden).

● element.innerHTML returns everything of text along with HTML tags inside the element.

● document.getElementsByClassName(`class_name`) returns the HTMLCollection of elements of the given class name.

● document.querySelector(`tag_name/.class_name/#id_name/tag_name[att_name=`att_value`]/element:pseudo_class`) returns the first of the given element, in the document flow, that matches the query.  

● document.querySelectorAll(`tag_name/.class_name/#id_name/tag_name[att_name=`att_value`]/element:pseudo_class`) returns the NodeList of the type of the given element, in the document flow, that matches the query.  

● If we go inside document.body then we cannot access objects in head or other objects that are outside the body. This applies to all scenarios.

● HTMLCollection and NodeList are like arrays but not arrays. The elements inside them can be accessed by putting [index] after it.

● String, number, array, object, NodeList, HTMLCollection etc. all are data types.

● To do tasks in the console that are done by ENTER key, we need to use SHIFT+ENTER.

● To convert HTMLCollection and NodeList into Array, we can use Array.from(HTMLCollection/NodeList)

● forEach works on NodeLists but not HTMLCollections.

● Node (DOM)
In the context of the DOM, a node is a single point in the node tree. Various things that are nodes are the document itself, elements, text, and comments.

● Node (networking)
In networking, a node is a connection point in the network. In physical networks, a node is usually a device, like a computer or a router.

● Node properties:
● Node.baseURI (Read only)
Returns a string representing the base URL of the document containing the Node.

● Node.childNodes (Read only)
Returns a live NodeList containing all the children of this node (including elements, text and comments). NodeList being live means that if the children of the Node change, the NodeList object is automatically updated.

● Node.firstChild (Read only)
Returns a Node representing the first direct child node of the node, or null if the node has no child.

● Node.isConnected (Read only)
A boolean indicating whether or not the Node is connected (directly or indirectly) to the context object, e.g. the Document object in the case of the normal DOM, or the ShadowRoot in the case of a shadow DOM.

● Node.lastChild (Read only)
Returns a Node representing the last direct child node of the node, or null if the node has no child.

● Node.nextSibling (Read only)
Returns a Node representing the next node in the tree, or null if there isn't such node.

● Node.nodeName (Read only)
Returns a string containing the name of the Node. The structure of the name will differ with the node type. E.g. An HTMLElement will contain the name of the corresponding tag, like 'audio' for an HTMLAudioElement, a Text node will have the '#text' string, or a Document node will have the '#document' string.

● Node.nodeType (Read only)
Returns an unsigned short representing the type of the node. Possible values are:

Name	Value

ELEMENT_NODE	1
ATTRIBUTE_NODE	2
TEXT_NODE	3
CDATA_SECTION_NODE	4
PROCESSING_INSTRUCTION_NODE	7
COMMENT_NODE	8
DOCUMENT_NODE	9
DOCUMENT_TYPE_NODE	10
DOCUMENT_FRAGMENT_NODE	11

● Node.nodeValue
Returns / Sets the value of the current node.

● Node.ownerDocument (Read only)
Returns the Document that this node belongs to. If the node is itself a document, returns null.

● Node.parentNode (Read only)
Returns a Node that is the parent of this node. If there is no such node, like if this node is the top of the tree or if doesn't participate in a tree, this property returns null.

● Node.parentElement (Read only)
Returns an Element that is the parent of this node. If the node has no parent, or if that parent is not an Element, this property returns null.

● Node.previousSibling (Read only)
Returns a Node representing the previous node in the tree, or null if there isn't such node.

● Node.textContent
Returns / Sets the textual content of an element and all its descendants.

● NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

● Don't use for...in to enumerate the items in NodeLists

Node Methods:
● Node.appendChild()
Adds the specified childNode argument as the last child to the current node. If the argument referenced an existing node on the DOM tree, the node will be detached from its current position and attached at the new position.

Node.cloneNode()
Clone a Node, and optionally, all of its contents. By default, it clones the content of the node.

● Node.compareDocumentPosition()
Compares the position of the current node against another node in any other document.

● Node.contains()
Returns true or false value indicating whether or not a node is a descendant of the calling node.

● Node.getRootNode()
Returns the context object's root which optionally includes the shadow root if it is available.

● Node.hasChildNodes()
Returns a boolean value indicating whether or not the element has any child nodes.

● Node.insertBefore()
Inserts a Node before the reference node as a child of a specified parent node.

● Node.isDefaultNamespace()
Accepts a namespace URI as an argument and returns a boolean value with a value of true if the namespace is the default namespace on the given node or false if not.

● Node.isEqualNode()
Returns a boolean value which indicates whether or not two nodes are of the same type and all their defining data points match.

● Node.isSameNode()
Returns a boolean value indicating whether or not the two nodes are the same (that is, they reference the same object).

● Node.lookupPrefix()
Returns a string containing the prefix for a given namespace URI, if present, and null if not. When multiple prefixes are possible, the result is implementation-dependent.

● Node.lookupNamespaceURI()
Accepts a prefix and returns the namespace URI associated with it on the given node if found (and null if not). Supplying null for the prefix will return the default namespace.

● Node.normalize()
Clean up all the text nodes under this element (merge adjacent, remove empty).

● Node.removeChild()
Removes a child node from the current element, which must be a child of the current node.

● Node.replaceChild()
Replaces one child Node of the current one with the second one given in parameter.

● 

● 

● 

*/

let d = document.getElementById(`bg-black`)

let div = d.getElementsByClassName(`wow`)[0];;

let doo = document.querySelector(`p`)

let pa = document.querySelectorAll(`#p-in-div`)

console.log(div);
console.log(pa[0].innerText);
console.log(pa[0].textContent);
console.log(pa[0].innerHTML);