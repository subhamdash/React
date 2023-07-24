
const sparseArray = [10, , , 40];
console.log(sparseArray)

//It will hae it's correct sieze that is 5.

console.log("The size of the array is ",sparseArray.length);
for(let i =0;i<sparseArray.length;i++)
{
    if(sparseArray[i])
    console.log(sparseArray[i])
}