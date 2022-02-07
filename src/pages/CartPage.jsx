import * as React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeItem, clearAll } = useCart();

  return (
    <div>
      <h1>Carrito</h1>
      {cart.map((purchase) => {
        return (
          <div key={purchase.item.id}>
            <p>{purchase.item.name}</p>
            <p>{purchase.quantity}</p>
            <button onClick={() => removeItem(purchase.item.id)}>
              Delete Item
            </button>
          </div>
        );
      })}
      <button onClick={clearAll}>Borrar todo</button>
    </div>
  );
};

export default CartPage;
