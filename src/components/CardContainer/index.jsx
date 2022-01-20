import { useEffect, useState } from "react";
import { getProductos } from "../../baseDeDatos";
import Item from "../Item";

const CardContainer = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProductos()
      .then((data) => setProducts(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="App">
      <h1>Holis!</h1>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        products.map((product) => <Item key={product.id} product={product} />)
      )}
    </div>
  );
};
export default CardContainer;
