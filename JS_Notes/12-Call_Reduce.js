/*
accumulator -The value resulting from the previous call to callbackFn. 
            On first call, initialValue if specified, otherwise the value of array[0].

currentValue - The value of the current element. On first call, the value of array[0] if an initialValue was specified, 
                otherwise the value of array[1].

currentIndex -  The index position of currentValue in the array. On first call, 
                0 if initialValue was specified, otherwise 1.

array    -   The array reduce() was called upon.

initialValue Optional  - A value to which accumulator is initialized the first time the callback is called. 
            If initialValue is specified, callbackFn starts executing with the first value in the array as 
            currentValue. If initialValue is not specified,
*/


