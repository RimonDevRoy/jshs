/*
// Call Stack Overflow

● If we define getter of a property or method, we will have to define its setter too if we want to set that property/method's value or definition inside the class. Otherwise, if setter not defined, that property/method's value can be set only in the parameters section of constructor.

● getter and setter for each every function declared in the class is already defined but with no instruction on what to do. So, we have to manually define them(technically override them)

● The getter and setter for every prop and method is to be defined by its exact name.

● We can use if statements inside getter and setter to check something and then pass the prop or method, or pass something else based on result of condition checking.

● getter is invoked when we try to `get` a property/method and setter is invoked when we try to `set` a property/method.

● When we define a setter, if we name the property with its previous name, constructor will try to set its value to undefined(if not given anything, and that given value if given) and the setter will also try to set the value of it. This creates a race and both of them keep on overriding each other and to solve this, we can define a different name property and then do other required operations.

● In the example below, there is a setting for `password` in both constructor and setter for `password`. This creates the conflict that which method will set `password`. This conflicts make constructor to be called and then setter to be called and then again constructor to be called and so on. This causes call stack to overflow due to size overcome.

● If getters and setters are defined, they are given more priority than constructor. This means, the setting line of constructor is overridden.

● getters are also needed when setter is invoked, because to 'set it we need to get it'.

 obj.prop   =  5
 --------  --------
| getter || setter |


● Just like setting a property has a default way(constructor), getting also does have a default way(getter with do nothing code).

● The argument received for a property in setter is gained from the argument for that property in constructor or when explicitly assigned.

● We always have to return something from getter.

• If you want to remove the getter/setter, you can just delete it.

delete obj.getter_name/setter_name;

●  Using a computed property name:

const expr = "foo";

const obj = {
  set/get [expr](arg) {
    this.property_name = "bar";
  },
}

● set can have only one argument

● getter and setter are pseudo-properties that override the process of getting and setting the property/method from/to memory. They are kind of placed over the property and do their assigned task upon invocation.

● The `length` property of Arrays and Strings is also desgined in a similar way. The setter of `length` is designed in such a way that it only takes the manual given value but does not set it, and the getter does loops on the array/string and calculates the length and returns it.

● There will be an update that will make #prop_name a private property. Currently, we just consider _prop_name a private property but anyone can access.

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

class User {
  constructor(email, password) {
    this.email = email
    this.passwordd = password
  }

  showDetail() {
    console.log(`Lol`)
  }

  get passwordd() {
    return this._passwordd
    // return `chal hatt`
  }

  get showDetail() {
    // this.showDetail()
    // return `phir aya?`
  }

  set passwordd(val) {
    this._passwordd = val
  }
}

const kutta = new User(`k@.com`, `123`)
console.log(kutta.passwordd = 5)
console.log(kutta)


// Function based way to the same
function Userr(email, password) {
  this._email = email
  this._password = password
  // In this way of doing it, we directly define the `_property` and define the `property` in the setter. Because, due to abstraction we would like to access the polished `property` not `_property`.

  Object.defineProperty(this, 'email', {
    get: function () {
      return this._email.toUpperCase()
    },
    set: function (val) {
      this._email = val
    }
  })
}

const dog = new Userr(`d@dog.com`, `abc`)
console.log(dog)


// Object based way to do the same
const Userrr = {
  _email: 'l@lawra.com',
  _password: 'xyz',

  get email() {
    return this._email.toUpperCase()
  },

  set email(val) {
    this._email = val
  }
}

const lawra = new Userrr()


