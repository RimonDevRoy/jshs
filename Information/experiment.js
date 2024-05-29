class Human {
  that = this
  constructor(name, age, email) {
    this.name = name
    this.age = age
    this.email = email
  }

  static staticShower() {
    console.log(`Static Called`)
  }

  showDetails() {
    console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
    // staticShower()
  }
}




// function Human(name, age, email) {
//   this.name = name
//   this.age = age
//   this.email = email
// }

// Human.prototype.showDetails = function () {
//   console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
//   // staticShower()
// }

// Function.prototype.showDetails = function () {
//   console.log(`This is ${this.name} of age ${this.age} bearing address ${this.email}`)
//   // staticShower()
// }

const human1 = new Human('Rajesh', 20, 'rajesh.com')
const human2 = new Human('Rajesh', 20, 'rajesh.com')

console.log(Human.prototype)
console.log(human1.prototype)
console.log(human2.prototype)
