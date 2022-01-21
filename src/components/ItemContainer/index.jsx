import { useEffect, useState } from "react";
import Item from "../Item";

const URL = "http://localhost:3001/productos";

const ItemContainer = () => {
  const [poke, setPoke] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setPoke(json))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const createProduct = async () => {
    const newProduct = {
      name: "Campera",
      price: 100010,
      description: "Esta es la descripción del producto número 10 ",
      stock: 10010,
      img: "https://picsum.photos/200",
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    });

    return response.json();
  };

  if (isLoading) {
    return <p>Cargando los poke...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <div>
        <button onClick={createProduct}>Crear nuevo producto</button>
        <ul>
          {poke.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
};

export default ItemContainer;
