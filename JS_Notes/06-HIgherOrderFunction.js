//When a function takes another function as argument or return a function it is know as higher order function

function x()
{
    console.log("Namaste");
}

function y(x) //Higher Order fucntion 
{
    x(); //Here X is a callback function 
}


//IF we have to calculate 2-3 differnt things like diameter, area and circumference then we have to make three functions
//We will have that the code is modular and repetations

const radius=[1,2,3,4,10]
const area=function(radius)
{
    return Math.PI*radius*radius;
}

const perimeter=function(radius)
{
    return 2*Math.PI*radius;
}

const diameter=function(radius)
{
    return 2*radius;
}

const calculate = function(radius,logic)
{
    const output=[]
    for(let i=0;i<radius.length;i++)
    {
        output.push(logic(radius[i]))
    }
    return output;
}


//console.log(calculate(radius,area));
//We can see that map is similart to Higher Order Function,caclutation is similart to map
console.log(radius.map(area))



Array.prototype.calculate2 = function(logic)
{
    const output=[]
    for(let i=0;i<this.length;i++)
    {
        output.push(logic(this[i]))
    }
    return output;
}
console.log(radius.calculate2(area)); //The this is pointed out to radius
//