import { Link, Outlet } from 'react-router-dom';
import {Navbar,HomePage} from './Navbar';
const Home = () => {
  return (
    <>
        <HomePage />
        <Navbar /> 
    </>
  );
};
export default Home;
