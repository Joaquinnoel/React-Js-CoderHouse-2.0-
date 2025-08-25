import './NavBar.css';
import CartWidget from "./CartWidget";


const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="brand">Mi Tienda</h1>
      <ul className="nav-links">
        <li><a href="#">Dulces</a></li>
        <li><a href="#">Acidos</a></li>
        <li><a href="#">Arabes</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;  




