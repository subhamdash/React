const obj= {
    firstName: "Akshay",
    printName:() =>
    {
        console.log(this.firstName);
    },
    printName2: function()
    {
        console.log(this.firstName);
    },
};

const obj2={
    firstName:"Simra",
}
obj.printName();//undeifned
obj.printName2(); //Akshay
obj.printName.call(); //undeifned
obj.printName2.call(); //undeifned

const heading=React.createElement(
    "h1",
    {
        id:"title",
    },
    "Heaing 1"
);

const heading2=React.createElement(
    "h2",
    {
        id:"title",
    },
    "Heaing 2"
);




    

