import React from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
          
          <h1 className="netting">FIDESSA TEST AUTOMATION TOOL</h1>  
          <nav className="Main-nav">  
          
              <div className="menu-link">
                  {/*2nd menu part */}
                  <ul>
                    <li>
                        <a href="/Home"> Home </a>
                        
                      
                    </li>
                    <li>
                        <Link to=""> About</Link>
                    </li>
                    <li>
                        <Link to="/Contact"> Contact</Link>
                        
                    </li>
                  </ul>
              </div>
          </nav>

          <nav className="Mid-nav">
          <div className="Mid-Section">
              <li><a href="#">EMEA</a> </li>
              <li><a href="#">APAC</a> </li>
              <li><a href="#">AMER</a> </li>
              </div>
            </nav>
        </>
    )
}

export default Navbar
