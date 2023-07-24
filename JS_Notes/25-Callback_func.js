//A callback function is a function passed into another function as an argument, 
//which is then invoked inside the outer function to complete some kind of routine or action.//


// 1. If the new keyword is used when calling the function, this inside the function is a brand new object.
function ConstructorExample() {
    console.log(this);
    this.value = 10;
    console.log(this);
}
new ConstructorExample();
    //output:-
    //ConstructorExample {}
    //ConstructorExample { value: 10 }



// 2 .If apply, call, or bind are used to call a function, 
//this inside the function is the object that is passed in as the argument.


function fn() {
    console.log(this);
}
var obj = {
    value: 5
};
var boundFn = fn.bind(obj);
boundFn();     // -> { value: 5 }
fn.call(obj);  // -> { value: 5 }
fn.apply(obj); // -> { value: 5 }

// 3. If a function is called as a method — that is, 
//if dot notation is used to invoke the function — this is the object that the function is a property of. 
//In other words, when a dot is to the left of a function invocation, this is the object to the left of the dot.
// (ƒ symbolizes function in the code blocks)

var obj2 = {
    value: 5,
    x:10,
    printThis: function() {
        console.log(this);
    }
};
obj2.printThis(); // -> { value: 5, printThis: ƒ }

// 4. If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions
// present above, this is the global object. In a browser, it’s window.
function fn() {
    console.log(this);
}
// If called in browser:
fn(); // -> Window {stop: ƒ, open: ƒ, alert: ƒ, ...}


/*
5. If multiple of the above rules apply, the rule that is higher wins and will set the this value.

6. If the function is an ES2015 arrow function, it ignores all the rules above and receives the this value of 
its surrounding scope at the time it’s created. To determine this, go one line above the arrow function’s 
creation and see what the value of this is there. It will be the same in the arrow function.
*/