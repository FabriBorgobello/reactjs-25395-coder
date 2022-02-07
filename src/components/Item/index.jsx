import { useNavigate } from "react-router-dom";
import "./styles.scss";

const Item = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="item-card">
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="data-container">
        <p className="name">Nombre: {product.name}</p>
        <p className="description">Descripcion: {product.description}</p>
        <p className="price">Precio: {product.price}</p>
        <button
          className="navBtn"
          onClick={() => navigate(`/products/${product.id}`)}
        >
          Ver más...
        </button>
      </div>
    </div>
  );
};

export default Item;
