import { Link, Outlet } from 'react-router-dom';
import {Navbar,HomePage} from './Navbar';
import './APAC.css';
const Home = () => {
  return (
    <>
            <h1 className="apac">APAC</h1>
            <div className="mod-link">
                  {/*2nd menu part */}
                  <ul>
                    <li>
                        <Link to="NETTING">Netting</Link>
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
  );
};
export default Home;