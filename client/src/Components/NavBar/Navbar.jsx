import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <h2>Nuestros Vehiculos</h2>
      <a href="#" className="nav__brand">
        {" "}
      </a>
      <ul className="nav__menu">
        <li className="nav__item">
          <a href="#" className="nav__link">
            VEHICULOS
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            NOSOTROS
          </a>
        </li>
        <li className="nav__item">
          <a href="/Form" className="nav__link">
            Vender vehiculo
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
