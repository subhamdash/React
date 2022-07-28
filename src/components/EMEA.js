import React from 'react'
import { Link } from 'react-router-dom'
import './APAC.css';

const Emea = () => {
    return (
        <>
                        <h1 className="emea">EMEA</h1>
            <div className="mod-link">
                  {/*2nd menu part */}
                  <ul>
                  
                    <li>
                        <Link to="/NETTING">Netting</Link>
                    </li>

                    <li>
                        <Link to="/CTAC"> CTAC</Link>
                    </li>

                    <li>
                        <Link to="/CABOT"> CABOT</Link>
                        
                    </li>

                    <li>
                        <Link to="/TMF"> TMF</Link>
                        
                    </li>
                    </ul>
                  
              </div>
        </>
    )
}

export default Emea

