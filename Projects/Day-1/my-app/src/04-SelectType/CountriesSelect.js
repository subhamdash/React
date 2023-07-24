import { useEffect, useState } from "react";


const SelectCountries= () =>{
    const countries = [
    {name:'India',value:'IN',cities:['Delhi','Mumbai']},
    {name:'USA',value:'US',cities:['New York','Seatle']},
    {name:'China',value:'CH',cities:['Beijing','Shangai']},
    ];
    const [names,setCountiresNames]=useState('Countries');


    useEffect(()=>{
        console.log(names)

    },[names])

     function changeCount(e){
        console.log(e.target.value);
        setCountiresNames(e.target.value);
        //console.log(names); //Here we will not see any changes and we will get the old values due to closure


    };




    return(
        <>
        <br></br>
        <h1>{names}</h1>
       <select  value={names} onChange={changeCount}> 
            {countries.map((item,index)=>{
                return (<option value={index}>{item.name}</option>)

            })}
        </select>
        <br></br>
        {console.log("We are trying to have the name -  ",names )}
        {countries[names] && console.log(countries[names].cities)}
        <select> 
            {countries[names] && countries[names].cities.map((item,index)=>{
                
                return (<option value={index}>{item}</option>)

            })}
        </select>

        
        </>
    )

}
export default SelectCountries