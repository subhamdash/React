const arr=[5,8,9,10,3]

const output=arr.filter(isOdd)

 function isOdd(a){
     return a%2;
 }
 console.log(output)

 //We can wrote in better way

 const output2=arr.filter((a) => a%2
 )
 console.log(output2)