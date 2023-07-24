//It doesn't reduce anyting. we are just taking all value and we are getting a single value out of it

const arr=[5,1,2,3,8] 

function findSum(arr)
{
    let max=0;
    for(let i=0;i<arr.length;i++)
    {
        if(max <arr[i])
        max=arr[i];
    }
    return max
}

const output2=arr.reduce(function(acc,curr){  //accumulator, current
    acc+=curr
    return acc
}, 0); // 0 is intial value of accumulator
console.log(output2)


const output3=arr.reduce(function(acc,curr){
    if(curr>acc){acc=curr}
    return acc;


},0);
console.log(output3)


