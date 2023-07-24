//When we say let and const are blocj scoper we mean to say that when var declared inside a block or if statement
//It is declared as global but when let id ecalred it goes into temporal dead zone hence we cannot call it outside the function

//Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
  }
  
  const myFunc = makeFunc();
  myFunc();


  const counter = (function () {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment() {
        changeBy(1);
      },
  
      decrement() {
        changeBy(-1);
      },
  
      value() {
        return privateCounter;
      },
    };
  })();
  
  console.log(counter.value()); // 0.
  
  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.
  
  counter.decrement();
  console.log(counter.value()); // 1.







  

  var x=[];

  function test()
  {
    var i=0;
    
      for(;i<3;i++)
      {
           x[i]=function abs() { //if we can make take this for part and put it in different fucntion and call it then we can solve closure issue
              // each should log its value.
              console.log("My value:", i);
            };
  
            //x[i]() // 0 1 2
      }
      i=10;
      for(var j=0;j<3;j++)
      {
        console.log(x[j])
      }

    //   var j=0;
    //   //var i=0;
    //   for(var k=0;k<3;k++)
    //   {
    //       //console.log(i)
    //       x[j](); //3 3 3 (Takes latest value of i , if you uncomment that line then i will become 0 and the output will be 0 0 0)
    //       j++;
    //   }
  
      
  }
  test()
  
//   for(var j=0;j<3;j++)
//   { x[j](); // 3 3 3
     
//   }



