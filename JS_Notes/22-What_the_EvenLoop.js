//Java Script is a single threaded which means it can do on thing at a time.
//JS even prints the stack till the error is occured.
//Browser get blocked till our request is not finished as the CallStack is blocked.
//IF you block the stack there will be a problem and we cannot have fluid UI.
//We used Asynchonous . 
//SetTimeout doesn't get executed on the stack.
//Event loop has the smallest task it is to look into the stack and look into the task queue.
//If the stack  is empty the first thing on the the queue is pushed on to the stack which effectively runs it
//We can see the stack is clear and there is callback function on queue so event loop runs and pushes the callback to stack

