import { useState } from "react";
import { useCart } from "../../context/CartContext";
import ItemCount from "../ItemCount";
const ItemDetail = ({ product }) => {
  const { addItem } = useCart();
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    addItem(product, counter);
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>{product.description}</p>
      <p>{product.price}</p>
      <ItemCount counter={counter} setCounter={setCounter} />
      <button onClick={handleClick}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
