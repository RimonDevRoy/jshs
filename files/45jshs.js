/*
// Class Constructor

• We don't need to use function, let, const etc. keywords inside class.

• Syntax:

class class_name {
  code
}

• The properties and methods that we define inside classes are just like manually defined properties and methods to functions that we make by injecting those into prototype(like constructors).

• Syntax for inheritance using classes: 

class inheritor_class extends base_class {
  code
}

• As we noticed in the previous lecture that we can pass this of a context to another function. super() method does the same thing for classes. The constructors of inheritor class must call base class's constructor even if inheritor is making its own one. super() takes arguments passed to the inheritor class object to the constructor of the base class and along with it, it takes the `this` of the inheritor class behind the scene and runs the constructor of base class but the properties and methods inside are also available for the inheritor class's constructor. This is basically doing base_class_constructor/method.call() for inheritor class cosntructor/method functionality under the hood.

• To define a property or method but not let the user access it, we can use the static keyword. This stays static even in the inheritor classes.

• Constructor function of a class is called immediately upon creation of an instance of the class. 

• To verify the under the hood similarity of class inheritance and prototypal inehritance, check class_name.prototype

• We can use a static method in the constructor to record the number of objects created from the class and a displayer that shows it.

• 'this.constructor.name' -> It returns the name of the class of the object.

• 'constructor.name' -> It returns 'window'

• Any extra code written after 'super' in the overriding method will also be executed after the execution of the 'super'.

• If no constructor is given to child class, the JS engine will provide 'constructor (arguments) {super(arguments)}' to the child class.

• A derived class must has to call 'super', and this has to be before using 'this' in the class.

• In order to use static methods for derived classes for their own use, we have to override them. `this.constructor.name` won't work. But as the constructor of parent class also runs with derived class, the count increases always.

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

• 

*/

class Human {
  that = this.name
  static count = 0
  uniqueID = 0
  clss = this.constructor.name
  // Variables and methods when declared in the class do not need to use this as they are just being made. But, when they are being used elsewhere after declaring because we need to indicate that this variable/method usage is for the particular instance and thus, we have to use `this`.

  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
    Human.objectCounter()
  }

  static objectCounter() {
    Human.count++
    this.uniqueID = Human.count
  }

  static staticShower() {
    console.log(`Static Called`)
  }

  showDetails() {
    console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
    // staticShower()
    Human.staticShower()
  }

  showCount() {
    console.log(`${Human.count} objects created from ${this.clss}`);
  }
}

class Male extends Human {
  constructor(name, age, email, hasPenis) {
    super(name, age, email)
    this.hasPenis = hasPenis
  }

  static objectCounter() {
    Male.count++
    this.uniqueID = Male.count
  }

  // showDetails() {
  //   super.showDetails()
  //   console.log(`${this.hasPenis === true ? `also penis` : `no penis`}`)
  // }
}

const human1 = new Human('Rajesh', 20, 'rajesh.com')
const male1 = new Male('Sampath', 19, 'sampath.com', false)
const male2 = new Male()

human1.showCount()
male1.showCount()

/*
// Same thing without class
function Human(name, age, email) {
  this.name = name
  this.age = age
  this.email = email
}

Human.prototype.showDetails = function () {
  console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
  // staticShower()
}

// Function.prototype.showDetails = function () {
//   console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
//   // staticShower()
// }

const human1 = new Human('Rajesh', 20, 'rajesh.com')
*/


// console.log(Human)
// console.log(Human.prototype) // Made from class
// console.log(human1.showCount())
// console.log(male1 instanceof Male)
// console.log(male1 instanceof Human)