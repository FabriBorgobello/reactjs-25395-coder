import * as React from "react";
import Item from "../../components/Item";
import "./styles.scss";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";
import Desafio from "../../components/Desafio";

const HomePage = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { categoryId } = useParams();

  React.useEffect(() => {
    const db = getFirestore();
    let productsCollection;
    if (categoryId) {
      productsCollection = db
        .collection("products")
        .where("categoryId", "==", Number(categoryId));
    } else {
      productsCollection = db.collection("products");
    }

    const getDataFromFirestore = async () => {
      setIsLoading(true);
      try {
        const response = await productsCollection.get();
        if (response.empty) console.log("No hay productos");
        setData(response.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };
    getDataFromFirestore();
  }, [categoryId]);

  if (isLoading) {
    return <p>Cargando los productos...</p>;
  } else if (error) {
    return <p>Ha habido un error {error.message}</p>;
  } else
    return (
      <div className="home-page">
        <h1>Category ID: {categoryId}</h1>
        <ul className="item-container">
          {data.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
        </ul>
      </div>
    );
};

export default HomePage;
