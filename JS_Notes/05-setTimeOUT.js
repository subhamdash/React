
function x()
{
    var i =1;
    setTimeout(() => {
        console.log(i);
        
    }, 3000);
    console.log("Namaste Java Script");
}
x()
//"Namaste Java Script"
//1
//THis wil be the output it doesn't wait for setTimeout to complete 