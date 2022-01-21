import "./styles.scss";

const Item = ({ product }) => {
  return (
    <div className="item-card">
      <div className="img-container">
        <img src={product.img} alt={product.name} />
      </div>
      <p>Nombre: {product.name}</p>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default Item;
