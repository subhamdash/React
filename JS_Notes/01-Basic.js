//Everything in JS happens in Execution Context
//Initially it skims through the script and stores the variable
/*
 ______________________________________________
|Memory                   | Codespase          |
|_________________________|____________________| 
|1. Variable Environment  | Thread of Execution|
|                         |                    |
|2. Here all variables are| Code are executed  |
|Stored in key val-pair   | one line at a time |
| a:10                    |                    |
| fn:{.....}              |                    |
|                         |                    |
------------------------------------------------

Java script is Syncronous Single THreaded Language

Java Scripts then executes the code now again:
When a function is invoked then a whole new execution context is created, 
After that all the values will be returned and execution context will be deleted,

*/

var n=2;
function square(num)
{
    var ans=num*num;
    return ans;
}
var square2=square(4);
console.log(n);

/*
 ____________________________________________________________________________
|Memory                                 | Codespase                          |
|_______________________________________|____________________________________| 
|1. n:undefined                         | 4. values is assigned              |
|                                       |   _______________________________  |
|2. square:{...}                        |   |Memory         | Codespase    | |
|whole code is stored                   |   |_______________|______________| |
|                                       |   | num:undefined |    num*num   | |
|                                       |   | ans:undefined |    return 4  | |
|                                       |   -------------------------------- |                      
|                                       |                                    |
|3.square2 :undefined                   |                                    |
| fn:{.....}                            |                                    |
|                                       |                                    |
------------------------------------------------------------------------------

//In first phase the Execution context ,variable is created and intially it's undefined
//In second phase n value is defined as 2 and it's passed to codespace
Here we will create a new execution phase where value of fucntion gets created and calculated
after that it returs the value and the 2nd codespace will delted

 ___________________________
|Memory   | Codespase       |
|_________|_________________| 
|         | Thread of Execut|
|         |                 |
-----------------------------


//We have Call stack and whole  Global Execution(GEC) Context is pushed and andother Exection Context(E1) 
pushed and after that Eexectuion E1 is pop and after that GEC is also poped out




1. When JavaScript code is executed, Execution Context is created and it is called Global Execution Context.
2. JavaScript program is executed in TWO PHASES inside Execution Context 
   a. MEMORY ALLOCATION PHASE - JavaScript program goes throughout the program and 
      allocate memory of Variables and Functions declared in program. 
   b. CODE EXECUTION PHASE - JavaScript program now goes throughout the code line by line and 
      execute the code.
3. A Function is invoked when it is called and it acts as another MINI PROGRAM and creates it's 
   own Execution Context.
4. Returns keyword return the Control back to the PREVIOUS Execution-Context 
   where the Function is called and Execution Context of the Function is DELETED. 
5. CALL STACK maintains the ORDER of execution of Execution Contexts. 
   It CREATES Execution Context whenever a Program starts or a Function is invoked and 
   it pops out the Execution Context when a Function or Program ENDS.
Check call stack on the console.
*/