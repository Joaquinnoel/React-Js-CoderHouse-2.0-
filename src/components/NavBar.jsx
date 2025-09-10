import './NavBar.css';
import CartWidget from "./CartWidget";
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand">Mi Tienda</h1>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/perfumes">Arabes</Link></li>
        <li><Link to="/category/velas">Dulces</Link></li>
        <li><Link to="/category/inciensos">Frescos</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;  




