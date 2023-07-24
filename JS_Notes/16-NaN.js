/*
NaN is a bizarre value in JavaScript, as it does not equal itself when compared,
 either with the loose equality (==) or strict equality (===) operator.
  NaN is the only value in the entire language which behaves in this manner with regards to comparisons.

  NaN doesn’t tell you what something is, it tells you what it isn’t.
  */

console.log(2 === 2) // True
console.log(true === true) // True
console.log("abc" === "abc") // True
console.log(NaN === NaN ) // false

console.log(parseInt("abc") )
console.log(parseInt("def") )
//These both give NaN but the things is both are different string so both NaN are different
Number.isNaN(undefined) //True

//////// SO we use  Object.is . It's a JS method which check for samesness.
console.log("WE are going to check for Object.is") 
console.log(0 === -0)
console.log(Object.is(0,-0))
console.log(Object.is(NaN,NaN))  //It perform same operation as === but treats NaN differently


console.log("Checking for undefined")

let x=undefined
console.log(x===undefined)
console.log(!(x===undefined))

let y=[1, ,3]
console.log(y.length);
for(let i=0;i<y.length;i++)
{
    if(!(y[i]===undefined))
    console.log(y[i])

}