import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./styles.scss";

const Navbar = () => {
  const { cartQuantity } = useCart();

  return (
    <nav className="navbar">
      <Link to="/">Mi ecommerce</Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/cart">Carrito ({cartQuantity})</Link>
        </li>
        <li>
          <Link to="/category/1">Categoria 1</Link>
        </li>
        <li>
          <Link to="/category/2">Categoria 2</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
