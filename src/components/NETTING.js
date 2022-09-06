import React from 'react'
import './netting.css';



const Netting = () => {

    return (
        <>

        
             <h1 className="Netting">Netting</h1>
            <div className="nett-link">
                  {/*2nd menu part */}
                  <ul>
                    <li >
                        SWA
                        { /*<label for="inputw" class="btn">Select Image</label> */}
                        <input id ="files" type="file"  className='inputw'/>
                        <button className='buttonw' >Upload</button>  
                    </li>

                    <li>
                        FNETCB
                        <button className='buttonw'>Upload</button>  
                    </li>

                    <li>
                        FAIDMY
                        <button className='buttonw'>Upload</button>  
                        
                    </li>

                    <li>
                        CSNCY
                        <button className='buttonw'> Upload</button>  
                        
                    </li>
                </ul>
                  
              </div>

              
        </>
    )
}
export default Netting
