//Function Statement - Declartion
a();
b();
function a()
{
    console.log("This is a simple declaration")
}

//Function Expression:
var b=function()
{ console.log("assinginga function to a variable");}

//Diff:- Hoisting is different, if we call a() before declaring then we will a as error
 //and b will get type Error


//Anonymus Function: --This doesn't have their identity
//function(){} ///as per ecma it should have a pame.It is used where function are used as values.


//Named function Expression: -
var b=function xyz() // we are giving name to both
{

}
//first class functions: -
//We can pass functions as arguments inside a function and can be received as fun
//We can return a function from a function.


function x()
//Call Back Function
{
Cl.log("NAM");
}
function y(x) //Higher order function
{ x();
}


function sums(a1,b1){
retrun (a1 + b1);
}

let sum =(a,b) =>{ return (a+b);} // we can remove return and braces as this is a single line sta

/*IIFE(Immediately Invoked Function Expression) - IT runs as soon as it is defined.
Self-Executing Anonymous Funtion.
We need it for Data Binding.
Grouping Operator =() 

*/

/*



0) Lexical environment = EC's Local Memory + Reference to Lexical Environment of its parent.

1) Lexical Environment of its parent is the scope where a function is physically present or defined.
 So, suppose a function x(), is defined and invoked in the GEC, when function x()'s EC is
  pushed in the call stack, it stores a reference to its parent's lexical environment 
  i.e. the GEC's memory.

2) Whenever a new Execution Context is pushed in the Call Stack it holds a 
reference to the Lexical Environment of its parent, i.e. the EC's memory from where it was invoked.

3) Global execution context holds reference to null.

4)  Javascript engine first looks for the variable/function being accessed in the local scope 
of the function, and if not found, it keeps on searching the lexical environment of its parent 
until it finds the variable/function being accessed.

5) The mechanism mentioned in point 4 above is called SCOPE CHAIN.

6) If the variable accessed is not found in the Scope Chain,
 then you will get the variable is not defined error in the  browser's console.
*/