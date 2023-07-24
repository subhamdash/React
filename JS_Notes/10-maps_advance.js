const user=[
    {fisrtName:"akshay",lastName:"saini",age:26},
    {fisrtName:"Subham",lastName:"dash",age:25},
    {fisrtName:"Rocky",lastName:"Bhai ",age:26},
    {fisrtName:"Elon",lastName:"musk",age:50},
]

const output =user.map((x) => x.fisrtName+" "+x.lastName)
console.log(output)


const output2 =user.filter((x)=> x.age>35 )
console.log(output2)


const output3 =user.reduce(function (acc,curr){
    if(acc[curr.age])
    { acc[curr.age]++; }
    else{
        acc[curr.age]=1; 
    }
    return acc

},{});

console.log(output3)