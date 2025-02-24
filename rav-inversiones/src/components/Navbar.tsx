import '../styles/Navbar.css';
import logo from '../assets/logo.png'; // Asumiendo que tu logo está en 'src/assets/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-logo">
          <img src={logo} alt="Rav Inversiones Logo" className="navbar-logo-img" />
        </a>
        <ul className="navbar-menu">
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/services">Servicios</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
