import * as React from "react";
import { useNavigate } from "react-router-dom";
import { getFirestore } from "../firebase";

const CARRITO = [
  {
    item: {
      id: 1,
      name: "Zapatillas",
      price: 10001,
      description: "Esta es la descripción del producto número 1 ",
      stock: 1001,
      img: "https://picsum.photos/200",
      categoryId: 1,
    },
    quantity: 10,
  },
  {
    item: {
      id: 2,
      name: "Paraguas",
      price: 10001,
      description: "Esta es la descripción del producto número 1 ",
      stock: 1001,
      img: "https://picsum.photos/200",
      categoryId: 1,
    },
    quantity: 5,
  },
];

const CartPage = () => {
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  let navigate = useNavigate();

  const getTotal = (cart) => {
    let total = 0;
    cart.forEach((element) => {
      total += element.item.price * element.quantity;
    });
    return total;
  };

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!name || !phone) {
      console.log("Por favor llene los campos");
      return false;
    }

    const newOrder = {
      buyer: { name, phone },
      items: CARRITO,
      total: getTotal(CARRITO),
    };

    console.log(newOrder);
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    const response = await ordersCollection.add(newOrder);
    navigate(`/thanks/${response.id}`);
  };

  return (
    <div>
      <h1>Carrito</h1>
      <h2>Detalle de la compra:</h2>
      {CARRITO.map((cart) => {
        return (
          <div key={cart.item.id} style={{ border: "1px solid blue" }}>
            <p>Nombre: {cart.item.name}</p>
            <p>$ {cart.item.price * cart.quantity}</p>
          </div>
        );
      })}
      <h2>Introduzca sus datos:</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
        }}
      >
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Escriba su nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">Teléfono</label>
        <input
          type="number"
          id="phone"
          name="phone"
          placeholder="Escriba su teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input type="submit" value="Finalizar compra" />
      </form>
    </div>
  );
};

export default CartPage;
