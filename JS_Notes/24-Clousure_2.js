let x=[];

  function test()
  {
      function createFunc(i)
      {
          return function(){console.log(i);}
      }
  
      for(var i=0;i<3;i++)
      {
           x[i]=createFunc(i) 
      }
      
      var j=0;
      //var i=0;
      for(var k=0;k<3;k++)
      {
          //console.log(i)
          x[j](); //3 3 3 (Takes latest value of i , if you uncomment that line then i will become 0 and the output will be 0 0 0)
          j++;
      }
  
      
  }
  test()
  
  for(var j=0;j<3;j++)
  { x[j](); // 3 3 3
     
  }