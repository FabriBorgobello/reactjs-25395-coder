import { Outlet } from "react-router-dom";
import { getFirestore } from "../firebase";

const AboutPage = () => {
  const updateOrder = () => {
    const db = getFirestore();
    const collection = db.collection("orders");
    const element = collection.doc("IC1xBczXUXh80ypEEcQE");

    element.delete().then((res) => console.log("Elemento eliminado", res));
  };
  return (
    <div>
      <h1>AboutPage</h1>
      <Outlet />
      <button onClick={updateOrder}>Eliminar</button>
    </div>
  );
};

export default AboutPage;
