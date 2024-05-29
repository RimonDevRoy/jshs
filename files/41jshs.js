/*
// Fetch

● Fetch throws error only when it is unable to send request. Whatever is obtained by the fetch() is termed as response even if they are HTTP error codes like error 404, 504 etc. 

● Syntax

fetch(resource)
fetch(resource, options)

Parameters
resource
This defines the resource that you wish to fetch. This can either be:

1.A string or any other object with a stringifier — including a URL object — that provides the URL of the resource you want to fetch.
2.A Request object.

options Optional
An object containing any custom settings you want to apply to the request. The possible options are:

body
Any body that you want to add to your request: this can be a Blob, an ArrayBuffer, a TypedArray, a DataView, a FormData, a URLSearchParams, string object or literal, or a ReadableStream object. This latest possibility is still experimental; check the compatibility information to verify you can use it. Note that a request using the GET or HEAD method cannot have a body.

browsingTopics Experimental
A boolean specifying that the selected topics for the current user should be sent in a Sec-Browsing-Topics header with the associated request. See Using the Topics API for more details.

cache
A string indicating how the request will interact with the browser's HTTP cache. The possible values, default, no-store, reload, no-cache, force-cache, and only-if-cached, are documented in the article for the cache property of the Request object.

credentials
Controls what browsers do with credentials (cookies, HTTP authentication entries, and TLS client certificates). Must be one of the following strings:

omit: Tells browsers to exclude credentials from the request, and ignore any credentials sent back in the response (e.g., any Set-Cookie header).
same-origin: Tells browsers to include credentials with requests to same-origin URLs, and use any credentials sent back in responses from same-origin URLs. This is the default value.
include: Tells browsers to include credentials in both same- and cross-origin requests, and always use any credentials sent back in responses.
Note: Credentials may be included in simple and "final" cross-origin requests, but should not be included in CORS preflight requests.

headers
Any headers you want to add to your request, contained within a Headers object or an object literal with String values. Note that some names are forbidden.

Note: The Authorization HTTP header may be added to a request, but will be removed if the request is redirected cross-origin.

integrity
Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).

keepalive
The keepalive option can be used to allow the request to outlive the page. Fetch with the keepalive flag is a replacement for the Navigator.sendBeacon() API.

method
The request method, e.g., "GET", "POST". The default is "GET". Note that the Origin header is not set on Fetch requests with a method of HEAD or GET. (This behavior was corrected in Firefox 65 — see Firefox bug 1508661.) Any string which is a case-insensitive match for one of the methods in RFC 9110 will be uppercased automatically. If you want to use a custom method (like PATCH), you should uppercase it yourself.

mode
The mode you want to use for the request, e.g., cors, no-cors, or same-origin.

priority
Specifies the priority of the fetch request relative to other requests of the same type. Must be one of the following strings:

high
A high priority fetch request relative to other requests of the same type.

low
A low priority fetch request relative to other requests of the same type.

auto
Automatically determine the priority of the fetch request relative to other requests of the same type (default).

redirect
How to handle a redirect response:

follow
Automatically follow redirects. Unless otherwise stated the redirect mode is set to follow.

error
Abort with an error if a redirect occurs.

manual
Caller intends to process the response in another context. See WHATWG fetch standard for more information.

referrer
A string specifying the referrer of the request. This can be a same-origin URL, about:client, or an empty string.

referrerPolicy
Specifies the referrer policy to use for the request. May be one of no-referrer, no-referrer-when-downgrade, same-origin, origin, strict-origin, origin-when-cross-origin, strict-origin-when-cross-origin, or unsafe-url.

signal
An AbortSignal object instance; allows you to communicate with a fetch request and abort it if desired via an AbortController.

Return value
A Promise that resolves to a Response object which was supposed to fetch.

● Fetch() response comes before other asynchronous responses because it is stored in High Priority Queue(Micro Task Queue) and others are stored in Task Queue.

● When a fetch() request is made, two works are done simultaneously. One work is to store memory spaces and other is network request handling by Web API / Node.js

● In the work of setting memory space:
Some memory space is assigned for Data(not this name actually) which is initially empty, and two arrays onFulfilled[fn] and onRejection[fn] are created. They are private fields and we are not allowed to access or push values to them.

● In the work of Web Browser based API / node API handling the network request:
A network request with the proper availability of resource. We cannot request without resource. After the network request is sent, either the request will go to the network or won't be able to go.
If it is able to reach the network, the response is stored in onFulfilled[fn], including error codes like 404, and if it is not able to reach the network or got stuck in the mid way, the rejection will be stored in onRejection[fn]. The function of the arrays fill the Data and then Data fills the variable that is taking the return value of fetch()

● 

● A callback is just a function that's passed into another function, with the expectation that the callback will be called at the appropriate time. As we just saw, callbacks used to be the main way asynchronous functions were implemented in JavaScript.

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

● Syntax to send fetch request with options and different type errors:

Reason	Failing examples
Invalid header name.	
// space in "C ontent-Type"
const headers = {
  'C ontent-Type': 'text/xml',
  'Breaking-Bad': '<3',
};
fetch('https://example.com/', { headers });
        
Invalid header value. The header object must contain exactly two elements.	
const headers = [
  ['Content-Type', 'text/html', 'extra'],
  ['Accept'],
];
fetch('https://example.com/', { headers });
        
Invalid URL or scheme, or using a scheme that fetch does not support, or using a scheme that is not supported for a particular request mode.	
fetch('blob://example.com/', { mode: 'cors' });
        
URL includes credentials.	
fetch('https://user:password@example.com/');
        
Invalid referrer URL.	
fetch('https://example.com/', { referrer: './abc\u0000df' });
        
Invalid modes (navigate and websocket).	
fetch('https://example.com/', { mode: 'navigate' });
        
If the request cache mode is "only-if-cached" and the request mode is other than "same-origin".	
fetch('https://example.com/', {
  cache: 'only-if-cached',
  mode: 'no-cors',
});
        
If the request method is an invalid name token or one of the forbidden headers ('CONNECT', 'TRACE' or 'TRACK').	
fetch('https://example.com/', { method: 'CONNECT' });
        
If the request mode is "no-cors" and the request method is not a CORS-safe-listed method ('GET', 'HEAD', or 'POST').	
fetch('https://example.com/', {
  method: 'CONNECT',
  mode: 'no-cors',
});
        
If the request method is 'GET' or 'HEAD' and the body is non-null or not undefined.	
fetch('https://example.com/', {
  method: 'GET',
  body: new FormData(),
});
        
If fetch throws a network error.	

● Some different examples:

1.
const myImage = document.querySelector("img");

const myRequest = new Request("flowers.jpg");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.blob();
  })
  .then((response) => {
    myImage.src = URL.createObjectURL(response);
  });

2.

const myImage = document.querySelector("img");
const reqHeaders = new Headers();

// A cached response is okay unless it's more than a week old
reqHeaders.set("Cache-Control", "max-age=604800");

const options = {
  headers: reqHeaders,
};

// Pass init as an "options" object with our headers.
const req = new Request("flowers.jpg", options);

fetch(req).then((response) => {
  // ...
});






● The functions that call setTimeout etc. asynchronous calls are the global functions of the same given name.

*/
// let response
// async function f(params) {
//     response = await fetch(`https://isro.vercel.app/api/customer_satellites`)
//         .then((resolved) => {
//             console.log(resolved);
//             console.log(typeof resolved);
//         })

// }
// console.log(response);
//     console.log(typeof response);
// f()

// setTimeout(() => {
//     console.log(response);
//     console.log(typeof response);
// }, 3000)

async function f1(params) {
    console.log(await fetch(`https://isro.vercel.app/api/customer_satellites`))
    console.log(typeof await fetch(`https://isro.vercel.app/api/customer_satellites`))
}
f1()