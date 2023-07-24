//Call.
//The reference array should be passed as first arugment and in function it need not to be declared. 

//The Filter method in Js has callBackFunction which takes 4 argument element, index, array, thisArg

//thisArg is a term commonly used in JavaScript, particularly in the context of higher-order functions 
//such as map, forEach, and reduce. It refers to the value that is used as the this context 

//when executing a provided function.
const testNumber =function (element)
{
    console.log(thisArg) //It will display Global object if we don't bind this function with any other object console. 
    console.log(this)
}


const testNumber2 =function(_,element)
{
    //console.log(this) //It will display Global object if we don't bind this function with any other object 
    console.log(_)
    console.log(element) 
    //console.log(this === typeof window)
}

let test_arr1=[8,7,5,4,3,6] //Here if we had passed an empty element the in that case the global this would have invoked and might cause issue with the desired calculations.
for(let i=0;i<test_arr1.length; i++)
{
 //testNumber(test_arr1[1]); // Here there is no call hence we will get the golbal object of "this" and element will be printed as 1,2,3 /in our console in the above function
//testNumber.call(test_arr1(i]);// The call is applied here and this will point to our elements we are passing like 1,2,3...and element will be showed as undefined
//testNumber.call(test_arr1, test_arr1[i]); // Here this will contain whole array than individual numbers and elements will contain individual Y / /umber 11ke 1,2,3
testNumber2(test_arr1[i]);

}