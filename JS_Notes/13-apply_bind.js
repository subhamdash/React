let printNames=function(city,food)
{
    console.log(this.name+" is from "+this.country+" and lives in  "+city+" Loves "+food +" food");
}

obj1={
    name:"Subham",
    country:"Indian",
}

obj2={
    name:"Chang",
    country:"China",
}
printNames.call(obj1,"Rayagada","italian")
printNames.apply(obj1,["Rayagada","italian"])

//bind -- We wil just bind it and it will give us a function to which we can invoke in later stages
let bind_vals=printNames.bind(obj2,["Shangai","Chinese"])
console.log(bind_vals) //Here we will get the copy which can be invoked later
bind_vals() 