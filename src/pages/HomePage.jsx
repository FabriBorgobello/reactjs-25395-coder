import { useNavigate } from "react-router-dom";

const HomePage = () => {
  let navigate = useNavigate();

  const goToProducts = () => {
    // Si el usuario está logueado
    const logueado = false;
    if (logueado) {
      navigate("/products");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={goToProducts}>Ir a la página de productos</button>
    </div>
  );
};

export default HomePage;
