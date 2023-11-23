import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <img src={logo} alt="Logo Wealth-Health" />
        <h1>HRNet</h1>
      </div>
      <nav className="header-menu">
        <Link to="/" aria-label="Accéder à la page d'accueil">
          Create a new employee
        </Link>
        <Link to="/employees" aria-label="Accéder à la page profil">
          View Current Employees
        </Link>
      </nav>
    </header>
  );
};

export default Header;
