import * as React from "react";
import Item from "../../components/Item";
import "./styles.scss";
import { getFirestore } from "../../firebase";
import { useParams } from "react-router-dom";

// const URL = "http://localhost:3001/productos";

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
        .collection("productos")
        .where("categoryId", "==", Number(categoryId));
    } else {
      productsCollection = db.collection("productos");
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

    // setIsLoading(true);
    // fetch(URL)
    //   .then((response) => response.json())
    //   .then((json) => setData(json))
    //   .catch((err) => setError(err))
    //   .finally(() => setIsLoading(false));
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

// const HomePage = () => {
//   const { data, isLoading, error, cambiarNombre } = useUser();

//   if (isLoading) {
//     return <p>Cargando...</p>;
//   } else if (error) {
//     return <p>Ha habido un error</p>;
//   } else
//     return (
//       <div>
//         <h1>Home</h1>

//         {/* HOOK */}
//         <p>Nombre: {data.name}</p>
//         <p>Email: {data.email}</p>
//         <img src={data.img} alt={data.name} />

//         <button onClick={cambiarNombre}>Cambiar nombre</button>
//       </div>
//     );
// };

{
  /* CONSUMER */
}
{
  /* <UserContext.Consumer>
        {(value) => (
          <div>
            <p>Nombre: {value.name}</p>
            <p>Email: {value.email}</p>
            <img src={value.img} alt={name} />
          </div>
        )}
      </UserContext.Consumer> */
}
