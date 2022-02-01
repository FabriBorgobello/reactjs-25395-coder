import useWindowSize from "../../hooks/useWindowSize";

const Eventos = () => {
  // CUSTOM HOOK:
  const { width, height } = useWindowSize();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log({
      [evt.target[0].name]: evt.target[0].value,
      [evt.target[1].name]: evt.target[1].value,
    });
  };
  const handleClickPadre = () => {
    console.log("Se clickeó el elemento PADRE");
  };
  const handleClickHijo = (evt) => {
    evt.stopPropagation();
    console.log("Se clickeó el elemento HIJO");
  };

  return (
    <div>
      <h1>Home</h1>
      <p>Ancho: {width} </p>
      <p>Alto: {height}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" />
        <label htmlFor="age">Edad</label>
        <input type="number" name="age" id="age" />
        <input type="submit" value="Enviar" />
      </form>

      <div className="padre" onClick={handleClickPadre}>
        <div className="hijo" onClick={handleClickHijo}></div>
      </div>
    </div>
  );
};

export default Eventos;

// DESAFIO
// const vocales = ["a", "e", "i", "o", "u"];
// const handleKeyDown = (event) => {
//   console.log(event.key);
//   if (vocales.includes(event.key)) {
//     event.preventDefault();
//   }
// };
