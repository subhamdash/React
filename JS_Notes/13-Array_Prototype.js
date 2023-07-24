/*
1.    What is array prototype
2.   Why we this and it's advantagte in 35
*/
//WE can creater array Like this also

let a=Array (5); 
a[0]=10; 
a[1]=20; 
a[2]=30; 
a.push(11);
console. log(a);

const isThisProductEven =function (element) {
console.log (this)
//console. log((element * this))
//return (element * this) % 2 === 0;
console. log(element)
return (element) % 2 === 0;
};
let b= [1,2,3,4]
for(let i=0;i<b.length; i++)
{
//console.log(isThisProductEven(b[i],1,b)); //Here this is not taking any element console.log("trying to call it")
console.log (isThisProductEven.call (b,b[i]));
console.log("The element of b is : ",b[i]);
}

let arr=Array()
///////////Creating a 2d array ///////////
k=1
for(let i=0;i<10;i+=2)
{
    let arr2=Array()
    for(let j=0;j<2;j++)
    {
      arr2.push(k);
      k++;
    }
    arr.push(arr2)
}

console.log(arr)


////////Creating a slice of the array /////////////////

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2, 4));
console.log(animals.slice(2, -1));

