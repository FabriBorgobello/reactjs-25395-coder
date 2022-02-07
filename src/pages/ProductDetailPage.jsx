import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const URL = `http://localhost:3001/productos/${productId}`;
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading || !product) return <p>Cargando...</p>;
  return <ItemDetail product={product} />;
};

export default ProductDetailPage;
