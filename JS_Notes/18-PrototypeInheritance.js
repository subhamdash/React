let arr=["Don't","Know","any","luck"]
let object={
    name:"Subham",
    city:"Dehradun",
    getIntro:function()
    {
        console.log(this.name + "from" + this.city);
    }
}

//JS attaches hidden things to  Object and function 
//When ever you create an object JS puts /attaches hidden properties(or objects)   to original objects
arr.__proto__
Array.prototype


