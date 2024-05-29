/*
// Objects--3 (JSON)

● We can destructure different proeprties of object in order to reduce time for calling different properties. Syntax:

const {prop1_name: own_given_name, prop2_name: own_given_name,..} = obj_name

● In React, there is by default a props parameter in every method and we cannot everytime use props.property to access any property inside it. We use destructuring there by {property_name}. 

● API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses. We just need to execute different properties of the Interface and obtain results without needing to know how the API did those.

● API is a documentation of the values received from backend, that is, whatever we wish to execute is fetched from backend and everything is done internally. API's are now stored as JSON's.

● JSON is identical to an object. It stores all the services as key-value pairs and the user just executes API.property(example) to get results without needing to know how it came. It can also be speculated as a small section of the whole DB instead of letting the user access the whole server but only the features required for him. To manually declare a JSON, we need to write the keys in strings too. Only writing {} without any name makes the object treated as JSON. JSON has no name attached to it.

● When an API URL is called using `fetch(url)`, the JSON containing the particular features(properties) are sent as response. It may take variable time to be sent according to various factors.

● Sometimes the API response is also sent through an array containing many objects.

● We must spend some time at first to understand the API response and then use its different features.

● We can use `JSON formatter` to format the API response and study it with ease.

● I think nested structures are tree DS.

● JSON is universal, that is, even sent to other languages and they are accessible.

● If we put the URL to the API in search bar of browser, we will directly get the API response then we can copy it and paste it in JSON formatter.

●   object		{2}
    results		[1]

The above syntax indicates that object is an object with two elements inside it. results is an array with one element.

● JSON stands for JavaScript Object Notation.

● 

● 

● 

● 

● 

● 

● 

*/

const course = {
    course_name: "JS",
    course_te: "hitesh",
    course_fee: 999,
}

const { course_name: name, course_te: teacher, course_fee: mal } = course

console.log(name, teacher, mal)

{
    `name`: `kutta`,
    `age`: 40,
    `personal`: {
        `email`: `wow@gmail.com`,
        `number`: `0123456789`
    }
    // We are wrapping the JSON correctly. That's why it is giving error.
}