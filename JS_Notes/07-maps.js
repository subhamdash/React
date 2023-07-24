const arr=[5,8,9,10,3]

const output=arr.map(double)

 function double(a){
     return a*2;
 }
//We can pass function like higher order function
 const output2=arr.map( function double(a){
    return a*2;
}

 )


const output2=arr.map((a) => {
    return a*2;
}) //We can remove the the curly braces as well

