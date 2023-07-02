import {useState} from "react";

const Counter_new=() =>{
     let [counter1,setCounter] = useState(0);
     let [text,setText]=useState("Hello")
     const addit=()=>
     {
        setCounter(counter1++);

     }
     const minusit=()=>
     {
        setCounter(counter1--);

     }



    return(
        <>
        <button onClick={addit}>+</button>
            {counter1}
        <button onClick={minusit}>-</button>
        <div>

        </div>
      

        </>

    )

}
export default Counter_new;