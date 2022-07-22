
import './App.css';
import Navbar from './components/Navbar';
import Amer from './components/AMER';
import Emea from './components/EMEA';
import Apac from './components/APAC';
import Netting from './components/NETTING';

import {
  BrowserRouter ,
  Routes,
  Route

} from "react-router-dom";

function App() {
  return (
<>
    <BrowserRouter>
      <Routes>
         <Route path="/" element={<Navbar /> } > 
          <Route path="Amer" element={<Amer /> } /> 
          <Route path="Emea" element={<Emea /> } /> 
          <Route path="Apac" element={<Apac /> } />
       
         </Route>
      </Routes>
    </BrowserRouter>

  </>

  );
}

export default App;
