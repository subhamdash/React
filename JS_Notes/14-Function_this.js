const x=function(ele)
{
    console.log(this)
    return this*ele;

}

let y=10;

let a=[3,4, ,8] 

//let b=a.map(x,y);
//console.log(b);


//In simpler terms, this is a keyword that refers to the current execution context, 
//whereas thisArg is an argument that allows you to set the specific value of this within a 
//particular function call.

let results=Array()
for(let i=0;i<a.length;i++)
{
    results.push(x.call(a[i],y))
}

console.log(results)





// Array.prototype.myFilter = function (callbackFn, thisArg) {

//     let result=Array()
//      for(let i=0;i<this.length;i++)
//      {
//        let k=this[i];
//        if(callbackFn.call(thisArg,k,i,this))   //WE are writing thisArg at first becase for test cases and 
//        {
//          result.push(k);
//          console.log(k);
//        }
//      }
//      return result;
//   };