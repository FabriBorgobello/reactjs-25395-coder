const Item = ({ product }) => {
  const cardStyles = { border: "1px solid red", width: 300 };

  return (
    <div style={cardStyles}>
      <img src={product.img} alt={product.name} />
      <p>Nombre: {product.name}</p>
      <p>Descripcion: {product.description}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default Item;
