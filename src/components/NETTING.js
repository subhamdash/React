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
                        <button className='buttonw'>Upload</button>  
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
