import React from 'react'
import { Outlet,Link } from 'react-router-dom';
import './APAC.css';
import Netting from './NETTING';
import {
    BrowserRouter ,
    Routes,
    Route
  
  } from "react-router-dom";

const Amer = () => {
    return (
        <>
            
            <h1 className="amer">AMER</h1>
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

export default Amer
