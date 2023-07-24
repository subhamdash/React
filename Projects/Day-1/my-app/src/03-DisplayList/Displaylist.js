import { useState } from "react";

const Displaylist = () =>{

    let list_of_blog=[
        {id:1,title:"Hello",body:"I am there"},
        {id:2,title:"Hey",body:"Trying to stay"},
        {id:3,title:"now",body:"Here to stay"}
    ]

    const [blogs,setBlogs]=useState(list_of_blog)

    return (
        <>

       { blogs.map( function iter(a)
        {
            return (
            <>
            <h1> {a.title}</h1>
            <p>{a.body}</p>
            </>
            )
            
        })}
        {console.log(blogs)}
        </>
    )
}
export default Displaylist