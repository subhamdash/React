import {useState} from "react";


const TextDisplay=() =>{
    let words=["Apple","Ball","Cap","Dog"]

     const [text,setText]=useState("Hello")
     const [seachList,setList]=useState(words)

     const changeit =(e) =>{
        if(e.target.value=="")
        {
        setList(words);
        return;
        }
        let ChangedWords= words.filter((items) => {
            if(items.toLowerCase().includes(e.target.value))
            {
                return items;
            }

        })
        setList(ChangedWords);
        console.log(e.target.value);
        console.log(ChangedWords)


     }


    return(
        <>
        
        <input onChange={changeit} />  


        {seachList.map((names)=>{
            return (
            <div>
            <li>{names}</li>
            </div>
            )
        })}
        </>

    )

}
export default TextDisplay;