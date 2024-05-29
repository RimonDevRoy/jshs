/*
// Variables

● Variables are memory spaces allocated to store some information.

● Constants are such memory spaces that have constant value that do not change.

● Variables are such memory spaces that can change their values later.

● Syntax to declare a constant.

const var_name = value;

● var_name is the name given to the memory space, and value is the information stored in that memory space.

● The keywords like let, var, const and other keywords of programming languages are the things that differentiate between .txt files and programming files. The softwares identify the keywords in in the files and execute the instruction related to the keyword. For example: let, const etc keyword instruct to declare a memory space each with a slight difference.

● console.table([var1, var2, var3,...]);
This shows all the variables in the form of table.

● console.log(var1, var2, var3,..);

● Scopes are ranges. The scopes are declared by {}. Code written inside a specific {} falls into that specific scope.

● It is advised to never use 'var' to declare variables.

● 'let' keyword instructs to declare a variable that is local to the scope where it was declared (i.e., belongs only to the scope in which it has been declared like block scopes and functional scopes).

● 'var' instructs to declare a variable that is in global scope.

● If a variable is just declared but not given any value, 'undefined' is its value until updated.

● 

● 

● 

● 

● 

● 

● 

● 

*/

const var1 = 500;
let var2 = "robotchar@gmail.com";
var var3 = "password";
var4 = "Sylhet"; // It is a bad practice
let var5;


console.log(var1, var2, var3, var4, var5);
console.table([var1, var2, var3, var4, var5]);