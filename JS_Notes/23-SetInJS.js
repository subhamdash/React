let value= new Set()
let arr=[1,2,3,4,1,2] 
for(let i=0;i<arr.length;i++)
{
    if(value.has(arr[i])) continue;
    value.add(arr[i])
}
console.log(value)