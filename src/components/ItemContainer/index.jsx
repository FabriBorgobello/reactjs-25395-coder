import { useEffect, useState } from "react";
import Item from "../Item";
import "./styles.scss";

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

  if (isLoading) {
    return <p>Cargando los poke...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <div>
        <ul className="item-container">
          {poke.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
};

export default ItemContainer;
