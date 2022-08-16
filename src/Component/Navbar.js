import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => (
  <div className="nav-link">
    <NavLink to="/" className="nav">Home</NavLink>
    <NavLink to="/calculator" className="nav">Calculator</NavLink>
    <NavLink to="/quotes" className="nav">Quotes</NavLink>
  </div>
);

export default Navbar;
