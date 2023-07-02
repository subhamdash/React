
{
    //compound statement

}
//1. Code inside curly bracket is called block.
//2. Multiple statements are grouped inside a block so it can be written where 
//JS expects single statements like in if, else, loop, function etc. Like if(true) true




//A lexical scope in JavaScript means that a variable defined outside a 
//function can be accessible inside another function defined after the variable declaration.
// But the opposite is not true; the variables defined inside a function will not be accessible 
//outside that function.


//Clouse is a function along with it;s lexcial scope
//Funtion rember it lexical scope
function x()
{
    var a=10;
    function z()
    {
        console.log(a); // It stores the refence of a
    }
    a=100;
    return z;
}
 var a=x();
 a(); //We can see this value hold the value the lexical unit of z like variable and all
 //a();