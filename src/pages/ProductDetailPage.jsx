import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../components/ItemDetail";
import { getFirestore } from "../firebase";

const ProductDetailPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("productos");
    const selectedProduct = productsCollection.doc(productId);

    setIsLoading(true);
    selectedProduct
      .get()
      .then((response) => {
        if (!response.exists) console.log("El producto no existe");
        setProduct({ ...response.data(), id: response.id });
      })
      .finally(() => setIsLoading(false));
  }, [productId]);

  if (isLoading || !product) return <p>Cargando...</p>;
  return <ItemDetail product={product} />;
};

export default ProductDetailPage;
