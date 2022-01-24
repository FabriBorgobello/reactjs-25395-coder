import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="item-card">
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <p>Nombre: {product.name}</p>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {product.price}</p>
      <button onClick={() => navigate(`/products/${product.id}`)}>
        Ver más...
      </button>
    </div>
  );
};

export default Item;
