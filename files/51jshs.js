/*
// Array--3

● VS Code itself is made with HTML, CSS, JS and it restricts some operations and functionalities and that's why we cannot do particular tasks inside VS Code.

● Every programming language is actually a text. An Engine(A Software) is there for every language to take the text file and convert it into code to run. This Engine is called interpreter or compiler. Engine of JS won't recognize the syntax of C++.

● The instructions we give in the code text file is converted to syntax tree and it defines how the program will run.

● node.js runs on V8 engine. The "node file_name" or any other command that we run is run by V8 engine.

● 'Bun' is 'javascriptcore' named JS engine that runs on safari 

● To change the execution policy of current user(apart from administrator) we need to run the command:

Set-ExecutionPolicy -Scope CurrentUser

Then supply 'Restricted' or 'Unrestricted' based on usage. Remember to set the execution policy back to 'Restricted' after use for security.

● By default many computers have their execution policy Restricted which does not let run any script. Some malicious people may try to trick user's computer into running a malicious code and that would be the case when you run any script.

● jsvu -> JS (Engine) Version Updater can be used to study Engines of JS.

● We can install jsvu by:

npm i -g jsvu

● For the first time, we need to run `jsvu` and it will ask which OS are you on and which engines to install.

● If we want to install further engines, we need the syntax:

jsvu --os=os_name_32/64 --engines=names

● When V8-debug is used, some special utility functions are available. The {%DebugPrint()} is such a function. The functions that start with '%' are particularly for debugging.

● ~/.jsvu/bin/v8-debug --allow-natives-syntax

This allows us to use native syntaxes of v8-debug engine. After running this command, the d8> will come. Then we have to write our program. If we do not use --allow-natives-syntax, the native features of v8-debug won't be available. To directly run files in the terminal, we have to expose the d8> in the terminal.

● We will get "elements kind: PACKED_SMI_ELEMENTS" after we run %DebugPrint(), and we will research about this in details.

● In JS arrays are of two types:
1. Continuous(also called PACKED): They are continuous.
2. Holey: They are non-continuous having holes(missing elements in it).

● In every programming language, arrays are optimized. In JS optimization is done in 3 types:
1. SMI(small integer)
2. Packed Element
3. Double(float, string, function, object,...)

Continuous and Holey have these 3 types of array each.
For float there is one kind of optimization, for string there is one and so on for every type(SMI, Packed Element).

● If continuous and has float, there is one type of optimization. If continuous and has function, there is one type of optimization. There is an unique kind of optimization for each case.

● For the methods of array, when we get to apply them, the array is optimized uniquely for different types.

● PACKED_SMI_ELEMENTS type of array is the most optimized array. Performance is best in it. Only and only integers should be taken, not even decimals like 1.0

● PACKED_DOUBLE_ELEMENTS type of array is second most optimized array. DOUBLE means the array should contain only 'float', 'string', 'function' etc.

● PACKED_ELEMENTS type of array is third most optimized. It is PACKED containing various type of data type.

● The moment we go downgrade, we cannot go up no matter what. If go from PACKED_SMI_ELEMENTS to PACKED_DOUBLE_ELEMENTS by adding a double element, we cannot go back to PACKED_SMI_ELEMENTS even if we delete that double element. downgrade transition is permanent.

● Checking for elements in array is done in a few steps if needed:
1. bound check: If the given index is larger than array's length or smaller than 0, it at once returns undefined.
2. hasOwnProperty() check: This checking is very expensive, because if `undefined` is in any index of array, it goes one prototype up to search for an element at that index, if there is none, it again goes one prototype up to search for it and this process makes this checking very expensive and unoptimized.

● Optimization order:

Continuous > Holey

SMI > DOUBLE > PACKED

● There are approximately 30-+5 variations for this as they applied to forEach, for etc.

● If we make arrays from Array constructor, HOLEY_SMI_ELEMENTS array is returned as only empty spaces, and as no element is present, the best optimization is applied at first(SMI). But the moment we add a DOUBLE it downgrades to HOLEY_PACKED_ELEMENTS.

Instead of this we could take an empty array, because empty array is not HOLEY. But when we add a DOUBLE, it goes to PACKED_ELEMENTS

● NaN, Infinity are also DOUBLE.

● It is better to use built-in methods instead of self made methods, because they are optimized for several cases, but in self made methods it is difficult to make it optimized many cases.

● 

● 

*/

// const arr = [1, 2]
// % DebugPrint(arr)


// Types of arrays
const arr2 = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

const arr3 = [1.0, 2.1, 3.0]
// PACKED_DOUBLE_ELEMENTS

const arr4 = [1, 5, "wow", () => { }]
// PACKED_ELEMENTS

const arr5 = [1, 2, 3, , , 4, 6]
// HOLEY_SMI_ELEMENTS

const arr6 = ['str1', , 'str2', 'str3']
// HOLEY_DOUBLE_ELEMENTS

const arr7 = [() => { }, 2, 'str', , 5.7]
// HOLEY_ELEMENTS


