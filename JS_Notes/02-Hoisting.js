// console.log(wwe)
// const wwe=100

console.log(x);
var x=7;
getName();  // undefined "Hello WOrld"
console.log(getName);  //It will give us funtion whole function as it is
console.log(getName());//Hellow WOrld 

function getName()
{
    console.log(y);
    console.log("Hello World");
    var y;
    y=10;
}


console.log(getName2);  //We will get whole function as schema printed out
getName2(); //error stating that getName2 is not a function
var  getName2 =() =>    //It's act as a variable rather than a fucntion 
{
    console.log(y);
    console.log("Hello World");
    var y;
    y=10;
}

console.log(value); //Will give us  error sayin cannot access before initialization
let value=10;


//Even before exectuion states all the the variables and function are stored 

//not defined- it's not intialized
//You can check the GEC 


/*We can access var before initializing due to hoisting .
let is  hoisted but in Temporal Dead Zone-  so that we cannot call before declaring it.
Temporal Dead Zone- It is the time/phase between when let is initialized and time where it's declared.

 In the var I's in global space and in case of let it's in the script. 
 In case of let ans const it's allocated but not are stored in the global memory.

There will be a different error for let and for the undeclared variables.
Windows and this are same. Windows Object are global object.
We cannot re-declaration of the let. 
We cannot redeclare a let with a var 
A const declaration and it's similar to let but with more strict rule.
We can initialize the value of the let anywhere in the program, but we cannot do the same thing with the const.

Missing initializer in const declaration and type error.
type error- intializes and declared
*/