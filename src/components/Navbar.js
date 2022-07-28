import React from 'react';
import './navbar.css';
import { Outlet,Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Netting from './NETTING';
import Amer from './AMER';
import Emea from './EMEA';
import Apac from './APAC';
import {
    BrowserRouter ,
    Routes,
    Route
  
  } from "react-router-dom";
import HERO from './HERO';
  const HomePage =() => {
      return(
          <>
            <h1 className="netting">FIDESSA TEST AUTOMATION TOOL</h1>  

          </>
      )
  }
  

const Navbar = () => {
    return (
        <>
           
       
         
          <nav className="Main-nav">  
          
              <div className="menu-link">
                  {/*2nd menu part */}
                  <ul >
                    <li>
                        
                        <Link to="/APAC">APAC</Link>

                    </li>
                    <li>
                        <Link to="/EMEA"> EMEA</Link>
                    </li>
                    <li>
                        <Link to="/AMER"> AMER</Link>
                        
                    </li>
                  </ul>
              </div>
              
          </nav>
        
        <Routes>
        <Route path="Amer" element={<Amer /> } /> 
        <Route path="Emea" element={<Emea /> } /> 
        <Route path="Apac" element={<Apac /> } />
        <Route path="Netting" element={<Netting /> } />  
        </Routes>

   

          

          
          
          
        
            
          
          
         
         {/* <nav className="Mid-nav">
          <div className="Mid-Section">
              <li><a href="#">EMEA</a> </li>
              <li><a href="#">APAC</a> </li>
              <li><a href="#">AMER</a> </li>
              </div>
    </nav> */}
   {/* <p className="Main-Para"> Please Click on the region</p> */}
            
        </>
    )
}

export { Navbar,HomePage};
