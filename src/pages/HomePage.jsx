import { useUser } from "../context/UserContext";

const HomePage = () => {
  const { data, isLoading, error, cambiarNombre } = useUser();

  if (isLoading) {
    return <p>Cargando...</p>;
  } else if (error) {
    return <p>Ha habido un error</p>;
  } else
    return (
      <div>
        <h1>Home</h1>

        {/* HOOK */}
        <p>Nombre: {data.name}</p>
        <p>Email: {data.email}</p>
        <img src={data.img} alt={data.name} />

        <button onClick={cambiarNombre}>Cambiar nombre</button>
      </div>
    );
};

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
export default HomePage;
