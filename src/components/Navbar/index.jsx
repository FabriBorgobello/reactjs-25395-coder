import { Link } from "react-router-dom";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span>Mi ecommerce</span>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
