/*
// Comparisons

● Comparational operators convert 'null' to 0, and it might also convert other data types into different values. That is why, null > 0 and null == 0 is false, but null >=0 is true

● When we use strict check (===, !==, etc.) conversions do not happen and they also check the data type.

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

● 

● 

● 

● 

● 

● 

● 

● 

◉ Comparison / relational operators

• == (value equal to)
This compares whether the value of two things are equal.

• != (value not equal to)
This compares whether the value of two things are unequal.

• === (value and type equal to)
This compares whether both value and type of two things are equal.

• !== (value and type not equal to)
This compares whether two things are unequal in terms of value and type as a whole.

• > (greater than)
This compares whether the left thing is greater than the right thing.

• < (lesser than)
This compares whether the left thing is lesser than the right thing.

• >= (greater than or equal to)
This compares whether the left thing is greater or equal to the right thing.

• <= (lesser than or equal to)
This compares whether the left thing is lesser or equal to the right thin.

• ? (ternary operator)
This checks a condition and then executes the code associated with that condition.
Syntax: 

condition1 ? (code_if_true1) : condtion2 ? (code_if_true2) ....: (code_if_false);

If condition1 is true, all these will be replaced by code_if_true

let c = a < b ? (a + b) : (b - a);

This means if the condition a < b is true then do (a + b) else do (b - a). Then it will be let c = a + b;

console.log((3>4) ? ("Wow") : (2>4) ?  ("Chup") : ("Now"));

This willl print Now.

◉ Logical operators

• && (AND operator)
This gives true if all the given conditions are true.

• || (OR operator)
This gives true if even any one of the given conditions is true.

• ! (NOT operator)
This gives true if the given conditions is false. Using bracketts the conditions inside them can act as a whole. For instance, 

! (cond1 && cond2 && cond3...)
Here, the overall outcome of the conditions inside the brackett will be provided to the NOT operator and then it will operate.

The conditionals provide the ability to conduct a chunk of code only if the condition associated with it gets fulfilled and which chunk of code will run will depend on the fact that which condition is filled. Syntax: 

if (condition of this) {
    code;
}

else if (condition of this) {
    code;
}

else if (condition of this) {
    code;
}

else if (condition of this) {
    code;
}
.
.
.
.
else {
    code;
}

First and foremost, the first condition of 'if' will be checked and if its true then the code inside it will be executed and all the conditions below it won't be checked but if false then it will go the first 'else if' and repeat the check and if not true then will go and continue like this until the 'else'.

variable1 ** variable2 ** variable3...;

This will make exponential tower.

variable1^variable2^variable3...;

They will come from right, that is, variable2^variable3 will be first calculated then variable1^(result of variable2^variable3) will be calculated.

*/
