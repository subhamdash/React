import React from 'react'
import './APAC.css';
import { Outlet,Link } from 'react-router-dom';
import Netting from './NETTING';
import {
    BrowserRouter ,
    Routes,
    Route
  
  } from "react-router-dom";

const Apac = () =>  {
    return (
        <>
            <h1 className="apac">APAC</h1>
            <div className="mod-link">
                  {/*2nd menu part */}
                  
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
                  
              </div>


            
        </>
    )
}

export default Apac
