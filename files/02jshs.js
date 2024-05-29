/*
// Local environment setup

● There is no gigantic difference between files of different extensions like .txt, .js, .py etc. But this extension makes them unique to the softwares like interpreter or compiler. When the softwares receive a file with .js extension, it will read the text written in the file as a JS file and if the same file is changed to .py extension, the software will read the texts written inside as python code.

● In the earlier days, the software that interpreted JS scripts were only available inside the browsers, but now that software has been taken out and made a JS runtime named "node.js"

● Runtime environment is a state of the target machine, which may include software libraries, environment variables, etc., to provide services to the processes running in the system.

● In computer programming, a runtime system or runtime environment is a sub-system that exists both in the computer where a program is created, as well as in the computers where the program is intended to be run. The name comes from the compile time and runtime division from compiled languages, which similarly distinguishes the computer processes involved in the creation of a program (compilation) and its execution in the target machine (the runtime).[1]

Most programming languages have some form of runtime system that provides an environment in which programs run. This environment may address a number of issues including the management of application memory, how the program accesses variables, mechanisms for passing parameters between procedures, interfacing with the operating system (OS), and otherwise. The compiler makes assumptions depending on the specific runtime system to generate correct code. Typically the runtime system will have some responsibility for setting up and managing the stack and heap, and may include features such as garbage collection, threads or other dynamic features built into the language.

A way to visualize it is by thinking that a Sanatani comes in a place filled with Sanatani tradition.

● In computing, source code, or simply code or source, is text (usually plain text) that conforms to a human-readable programming language and specifies the behavior of a computer. 

● In computing, object code or object module is the product of an assembler or compiler.
In a general sense object code is a sequence of statements or instructions in a computer language,[2] usually a machine code language (i.e., binary) or an intermediate language such as register transfer language (RTL). 

● Runtime is the period of time when a program is running and generally occurs after compile time.

● Since you have a C++ background, C++ performs what is called ahead-of-time (AOT) compilation, the code is transformed during compilation into machine code before the execution.

JavaScript on the other side is internally compiled by V8 with just-in-time (JIT) compilation is done during execution. While the code is being executed by the interpreter it will keep track of functions that are called very often and mark them as hot functions then it will compile them to machine code and store them.

● In computer science, an interpreter is a computer program that directly executes instructions written in a programming or scripting language, without requiring them previously to have been compiled into a machine language program. An interpreter generally uses one of the following strategies for program execution:

Parse the source code and perform its behavior directly;
Translate source code into some efficient intermediate representation or object code and immediately execute that;
Explicitly execute stored precompiled bytecode[1] made by a compiler and matched with the interpreter's Virtual Machine.

● In computing, a compiler is a computer program that translates computer code written in one programming language (the source language) into another language (the target language). The name "compiler" is primarily used for programs that translate source code from a high-level programming language to a low-level programming language (e.g. assembly language, object code, or machine code) to create an executable program.

● The "LTS" version fo node.js is best for building production level apps.

● The tree parser in the compiler/interpreter softwares recognize the keywords like 'console', 'log' etc. from program files and execute them.

● Compiler/interpreter does not accept .txt files, because they are not built to take them but just program files.

● To access a file from the terminal, we need to be in the folder where the file exists. It will not work even if we are in the parent folder of the folder that has the file.

● 

● 

● 

● 

● 

● 

● 

*/

console.log("Wow")