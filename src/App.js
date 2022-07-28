
import './App.css';
import {Navbar,HomePage} from './components/Navbar';
import Amer from './components/AMER';
import Emea from './components/EMEA';
import Apac from './components/APAC';
import Netting from './components/NETTING';
import Home from './Home';


import {
  BrowserRouter ,
  Routes,
  Route

} from "react-router-dom";
import HERO from './components/HERO';

function App() {
  return (
<>
    <BrowserRouter>
    <HomePage />
    <Navbar /> 
    <Routes>
        <Route path='/' element={<Home />} />
  
   
        </Routes>

    </BrowserRouter>
    

  </>

  );
}

export default App;
