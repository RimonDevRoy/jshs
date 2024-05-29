/*
// getters, setter, instanceOf operators

◉ The 'get' syntax binds an object property to a function that will be called when that property is looked up. It can also be used in classes.

• The same "name" cannot be used elsewhere if it is used in getter. Syntax to define:

get getter_name(arg) {
    code
    return this.property_name;
}

Syntax to call:

object_name.getter_name;

• 'getter_name' is a pseudo-property.

• The same "name" cannot be used elsewhere if it is used in getter. Syntax to define:

get getter_name(arg) {
    code
    return this.property_name;
}

Syntax to call:

object_name.getter_name;

• 'getter_name' is a pseudo-property.

• If you want to remove the getter, you can just delete it:

delete obj.getter_name;

• Using a computed property name:

const expr = "foo";

const obj = {
  get [expr]() {
    return "bar";
  },
};

console.log(obj.foo); // "bar"

◉ The 'set' syntax binds an object property to a function that will be updated. It can also be used in classes. It must have only one argument.

• The same "name" cannot be used elsewhere if it is used in setter. Syntax to define:

set setter_name(arg) {
    code
    this.property_name = arg;
}

Syntax to call:

object_name.setter_name = argument_value;

• If you want to remove the setter, you can just delete it:

delete obj.setter_name;

• Using a computed property name:

const expr = "foo";

const obj = {
  set [expr](arg) {
    this.property_name = "bar";
  },
};

console.log(obj.foo); // "bar"

◉ 'instanceOf' operator: It checks whether an object is an instance of a class or not. It returns 'true' if the object belongs to the class and the classes that are inherited from that parent class.

• Syntax:

let value = obj_name instanceOf class_name;
console.log(value);

*/

class Animal {
  constructor(nameok) {
      this.name = nameok;
  }

  get dogname() {
      return this.name;
      // 'dogname' is a pseudo-property.
  }

  set kuttaname(wowname) {
      this.name = wowname;
  }
}

class Bilai extends Animal {

}

let an = new Animal(`Dog vai`);
let b = new Bilai;
let g = 50;

console.log(an.dogname);
an.kuttaname = "Dog only";
console.log(an.dogname);

console.log(an instanceof Animal);
console.log(an instanceof Bilai);
console.log(b instanceof Bilai);
console.log(b instanceof Animal);
console.log(g instanceof Bilai);