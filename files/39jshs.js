/*
// V8 Engine (API - XHR)

● AJAX: Asynchronous JavaScript And XML

● Understanding AJAX clarifies out understanding of asynchronous programming in JS.

● The XMLHttpRequest.readyState property returns the state an XMLHttpRequest client is in. An XHR client exists in one of the following states:

Value - State -> Description
0 - UNSENT -> Client has been created. open() not called yet.
1 - OPENED -> open() has been called.
2 - HEADERS_RECEIVED -> send() has been called, and headers and status are available.
3 - LOADING	-> Downloading; responseText holds partial data.
4 - DONE -> The operation is complete.

UNSENT
The XMLHttpRequest client has been created, but the open() method hasn't been called yet.

OPENED
open() method has been invoked. During this state, the request headers can be set using the setRequestHeader() method and the send() method can be called which will initiate the fetch.

HEADERS_RECEIVED
send() has been called, all redirects (if any) have been followed and the response headers have been received.

LOADING
Response's body is being received. If responseType is "text" or empty string, responseText will have the partial text response as it loads.

DONE
The fetch operation is complete. This could mean that either the data transfer has been completed successfully or failed.

● XHR -> HMLHttpRequest. It is a class so we need to take a fresh instance of it using new keyword.

● open(`request_METHOD`, `url`)
This method specifies the request method and url of where the request is to be sent or API to receive from. After writing this, we have to call the send() to send request.

● xhr.readyState returns the state of the request at the time of calling readyState.

● xhr.onreadystatechange = function () {
    code
}

The above function is executed whenever the state of the request changes.

● When we have interaction between multiple contexts, to specify the current context we use `this`

● console is not part of core JS. It is injected by the runtime envrionment(V8 Engine).

● The whole V8 Engine is available on Github

● API is the language of talking between two entity. We access different properties of the JSON Object as question and the sending entity sends response as answer. This is talking.

● At first we need to take a fresh instance of XMLHttpRequest(). After that we invoke open() with the required arguments and then finally the request is sent to either retrieve from or write information on the server upon the invocation of send(). The response is fully received when the request is at state 4. Before that partial data is received.

● Most of the time, the response from the sender party comes in string. We need to parse it into JSON before accessing it.

● JSON.parse(convertable_string) converts a convertable string into JSON.

● 

● 

● 

● 

● 

● 

● 

*/

// const reqURL = `https://isro.vercel.app/api/customer_satellites`
// let fetchedData


// let xhr = new XMLHttpRequest()
// console.log(xhr.readyState);

// // xhr.open(`GET`, reqURL)
// xhr.onreadystatechange = function () {
//     console.log(xhr.readyState);
//     if (xhr.readyState === 4) {
//         const data = JSON.parse(this.responseText)
//         fetchedData = JSON.parse(this.responseText)
//         // `this` needs to be used specify that we are talking about the current context.
//         console.log(data)
//         // In general, responses are sent in the form of strings.
//     }
// }

// // console.log(xhr.readyState) 
// xhr.open(`GET`, reqURL)
// // console.log(xhr.readyState) 
// xhr.send()
// // console.log(xhr.readyState) 


// Assignment

const reqUrl = `https://api.github.com/users/hiteshchoudhary`

let data

const cardMaker = (name_string, bio_text, fol_num) => {
    return `
    <div>Name: ${name_string}</div>
    <div>Bio: ${bio_text}</div>
    <div>Followers: ${fol_num}</div>
    `
}

const btn = document.querySelector(`button`)
const cardDiv = document.querySelector(`.card`)
const statusDiv = document.querySelector(`.status`)

const xhr = new XMLHttpRequest()

xhr.onreadystatechange = function () {
    if (xhr.readyState === 1 || xhr.readyState === 2 || xhr.readyState === 3) {
        statusDiv.innerHTML = `Loading...`
    } else if (xhr.readyState === 4) {
        statusDiv.innerHTML = `Received Successfully!`

        data = JSON.parse(this.responseText)

        cardDiv.innerHTML = cardMaker(data.name, data.bio, data.followers)

        btn.innerHTML = `Happy Now?`
    }
}



btn.addEventListener(`click`, function (event) {
    xhr.open(`GET`, reqUrl)
    xhr.send()
})


