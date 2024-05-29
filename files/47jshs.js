/*
// Objects--4 (Property Descriptors)

● Object.getOwnPropertyDescriptor(object_reference, "property_key_of_the_object") returns an object that shows the hidden properties and methods of the given object's property key.

● We can use this to make some properties and method non-writable and read-only to the users. Syntax:

Object.defineProperty(object_reference, property_key, {
  value: value
  writable: true/false 
  enumerable: true/false
  configurable: true/false
})

value -> default value of the key
writable -> status of whether the value can be edited or not
enumerable -> status of whether the key of the object is iterable or not
configurable ->

● for (let [key, value] of Object.entries(object_name)) {
  code
} Effective

for (let [key, value] of object_name) {
  code
} Not effective

● 'Code fat jana ka matlab hain ki symmetry mein non-symmetry ghus jana. Jaise ki key value pairs ki list mein function ajana'

● The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). The object returned is mutable but mutating it has no effect on the original property's configuration.

● value
The value associated with the property (data descriptors only).

writable
true if and only if the value associated with the property may be changed (data descriptors only).

get
A function which serves as a getter for the property, or undefined if there is no getter (accessor descriptors only).

set
A function which serves as a setter for the property, or undefined if there is no setter (accessor descriptors only).

configurable
true if and only if the type of this property descriptor may be changed and if the property may be deleted from the corresponding object.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object.

● The Object.defineProperty() static method defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

||||||||||||||| Description ||||||||||

Object.defineProperty() allows a precise addition to or modification of a property on an object. Normal property addition through assignment creates properties which show up during property enumeration (for...in, Object.keys(), etc.), whose values may be changed and which may be deleted. This method allows these extra details to be changed from their defaults. By default, properties added using Object.defineProperty() are not writable, not enumerable, and not configurable. In addition, Object.defineProperty() uses the [[DefineOwnProperty]] internal method, instead of [[Set]], so it does not invoke setters, even when the property is already present.

Property descriptors present in objects come in two main flavors: data descriptors and accessor descriptors. A data descriptor is a property with a value that may or may not be writable. An accessor descriptor is a property described by a getter-setter pair of functions. A descriptor must be one of these two flavors; it cannot be both.

Both data and accessor descriptors are objects. They share the following optional keys (please note: the defaults mentioned here are in the case of defining properties using Object.defineProperty()):

configurable
when this is set to false,

the type of this property cannot be changed between data property and accessor property, and
the property may not be deleted, and
other attributes of its descriptor cannot be changed (however, if it's a data descriptor with writable: true, the value can be changed, and writable can be changed to false).
Defaults to false.

enumerable
true if and only if this property shows up during enumeration of the properties on the corresponding object. Defaults to false.

A data descriptor also has the following optional keys:

value
The value associated with the property. Can be any valid JavaScript value (number, object, function, etc.). Defaults to undefined.

writable
true if the value associated with the property may be changed with an assignment operator. Defaults to false.

An accessor descriptor also has the following optional keys:

get
A function which serves as a getter for the property, or undefined if there is no getter. When the property is accessed, this function is called without arguments and with this set to the object through which the property is accessed (this may not be the object on which the property is defined due to inheritance). The return value will be used as the value of the property. Defaults to undefined.

set
A function which serves as a setter for the property, or undefined if there is no setter. When the property is assigned, this function is called with one argument (the value being assigned to the property) and with this set to the object through which the property is assigned. Defaults to undefined.

If a descriptor doesn't have any of the value, writable, get, and set keys, it is treated as a data descriptor. If a descriptor has both [value or writable] and [get or set] keys, an exception is thrown.

These attributes are not necessarily the descriptor's own properties. Inherited properties will be considered as well. In order to ensure these defaults are preserved, you might freeze existing objects in the descriptor object's prototype chain upfront, specify all options explicitly, or create a null-prototype object.

Example
const obj = {};
// 1. Using a null prototype: no inherited properties
const descriptor = Object.create(null);
descriptor.value = "static";

// not enumerable, not configurable, not writable as defaults
Object.defineProperty(obj, "key", descriptor);

// 2. Being explicit by using a throw-away object literal with all attributes present
Object.defineProperty(obj, "key2", {
  enumerable: false,
  configurable: false,
  writable: false,
  value: "static",
});

// 3. Recycling same object
function withValue(value) {
  const d =
    withValue.d ||
    (withValue.d = {
      enumerable: false,
      writable: false,
      configurable: false,
      value,
    });

  // avoiding duplicate operation for assigning value
  if (d.value !== value) d.value = value;

  return d;
}
// and
Object.defineProperty(obj, "key", withValue("static"));

// if freeze is available, prevents adding or
// removing the object prototype properties
// (value, get, set, enumerable, writable, configurable)
(Object.freeze || Object)(Object.prototype);


When the property already exists, Object.defineProperty() attempts to modify the property according to the values in the descriptor and the property's current configuration.

If the old descriptor had its configurable attribute set to false, the property is said to be non-configurable. It is not possible to change any attribute of a non-configurable accessor property, and it is not possible to switch between data and accessor property types. For data properties with writable: true, it is possible to modify the value and change the writable attribute from true to false. A TypeError is thrown when attempts are made to change non-configurable property attributes (except value and writable, if permitted), except when defining a value same as the original value on a data property.

When the current property is configurable, defining an attribute to undefined effectively deletes it. For example, if o.k is an accessor property, Object.defineProperty(o, "k", { set: undefined }) will remove the setter, making k only have a getter and become readonly. If an attribute is absent from the new descriptor, the old descriptor attribute's value is kept (it won't be implicitly re-defined to undefined). It is possible to toggle between data and accessor property by giving a descriptor of a different "flavor". For example, if the new descriptor is a data descriptor (with value or writable), the original descriptor's get and set attributes will both be dropped.

● Writable attribute
When the writable property attribute is false, the property is said to be "non-writable". It cannot be reassigned. Trying to write to a non-writable property doesn't change it and results in an error in strict mode.

● Enumerable attribute
The enumerable property attribute defines whether the property is considered by Object.assign() or the spread operator. For non-Symbol properties, it also defines whether it shows up in a for...in loop and Object.keys() or not. For more information, see Enumerability and ownership of properties.

● Configurable attribute
The configurable attribute controls whether the property can be deleted from the object and whether its attributes (other than value and writable) can be changed.

This example illustrates a non-configurable accessor property.If the configurable attribute of o.a had been true, none of the errors would be thrown and the property would be deleted at the end.

This example illustrates a non-configurable but writable data property. The property's value can still be changed, and writable can still be toggled from true to false.


const o = {};
Object.defineProperty(o, "b", {
  writable: true,
  configurable: false,
});
console.log(o.b); // undefined
Object.defineProperty(o, "b", {
  value: 1,
}); // Even when configurable is false, because the object is writable, we may still replace the value
console.log(o.b); // 1
o.b = 2; // We can change the value with assignment operators as well
console.log(o.b); // 2
// Toggle the property's writability
Object.defineProperty(o, "b", {
  writable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: because the property is neither writable nor configurable, it cannot be modified
// At this point, there's no way to further modify 'b'
// or restore its writability


This example illustrates a configurable but non-writable data property. The property's value may still be replaced with defineProperty (but not with assignment operators), and writable may be toggled.

● Xmpl
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: true,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // We can replace the value with defineProperty
console.log(o.b); // 1
o.b = 2; // throws TypeError in strict mode: cannot change a non-writable property's value with assignment

This example illustrates a non-configurable and non-writable data property. There's no way to update any attribute of the property, including its value.

Xmpl
const o = {};
Object.defineProperty(o, "b", {
  writable: false,
  configurable: false,
});
Object.defineProperty(o, "b", {
  value: 1,
}); // TypeError: the property cannot be modified because it is neither writable nor configurable.

Adding properties and default values:
It is important to consider the way default values of attributes are applied. There is often a difference between using property accessors to assign a value and using Object.defineProperty(), as shown in the example below.

Xmpl
const o = {};

o.a = 1;
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: true,
  configurable: true,
  enumerable: true,
});

// On the other hand,
Object.defineProperty(o, "a", { value: 1 });
// is equivalent to:
Object.defineProperty(o, "a", {
  value: 1,
  writable: false,
  configurable: false,
  enumerable: false,
});

Custom setters and getters:
The example below shows how to implement a self-archiving object. When temperature property is set, the archive array gets a log entry.

Xmpl
function Archiver() {
  let temperature = null;
  const archive = [];

  Object.defineProperty(this, "temperature", {
    get() {
      console.log("get!");
      return temperature;
    },
    set(value) {
      temperature = value;
      archive.push({ val: temperature });
    },
  });

  this.getArchive = () => archive;
}

const arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]

In this example, a getter always returns the same value.

Xmpl
const pattern = {
  get() {
    return "I always return this string, whatever you have assigned";
  },
  set() {
    this.myname = "this is my name string";
  },
};

function TestDefineSetAndGet() {
  Object.defineProperty(this, "myproperty", pattern);
}

const instance = new TestDefineSetAndGet();
instance.myproperty = "test";
console.log(instance.myproperty);
// I always return this string, whatever you have assigned

console.log(instance.myname); // this is my name string


Inheritance of properties:
If an accessor property is inherited, its get and set methods will be called when the property is accessed and modified on descendant objects. If these methods use a variable to store the value, this value will be shared by all objects.

Xmpl
function MyClass() {}

let value;
Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return value;
  },
  set(x) {
    value = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // 1


This can be fixed by storing the value in another property. In get and set methods, this points to the object which is used to access or modify the property.

Xmpl
function MyClass() {}

Object.defineProperty(MyClass.prototype, "x", {
  get() {
    return this.storedX;
  },
  set(x) {
    this.storedX = x;
  },
});

const a = new MyClass();
const b = new MyClass();
a.x = 1;
console.log(b.x); // undefined


Unlike accessor properties, data properties are always set on the object itself, not on a prototype. However, if a non-writable data property is inherited, it is still prevented from being modified on the object.

Xmpl
function MyClass() {}

MyClass.prototype.x = 1;
Object.defineProperty(MyClass.prototype, "y", {
  writable: false,
  value: 1,
});

const a = new MyClass();
a.x = 2;
console.log(a.x); // 2
console.log(MyClass.prototype.x); // 1
a.y = 2; // Ignored, throws in strict mode
console.log(a.y); // 1
console.log(MyClass.prototype.y); // 1

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

*/

const des = Object.getOwnPropertyDescriptor(Math, 'PI')

// Object.defineProperty(Math, 'PI', { writable: true,
// enumerable: true,
// configurable: true})
// Not possible because this is already defined by the developers and it is restricted to define it again.

// console.log(des);
// Math.PI = 10
// console.log(Math.PI);

let obj = {
  uname: `rob`,
  age: 20,
  pass: `wow`
}

Object.defineProperty(obj, 'uname', {
  value: `lawra`,
  writable: true,
  enumerable: false,
  configurable: true
})

Object.defineProperty(obj, 'age', {
  value: `lawra`,
  writable: true,
  enumerable: false,
  configurable: true
})

obj.uname = `lol`
console.log(obj);

for (const key in obj) {
  console.log(key);
}




