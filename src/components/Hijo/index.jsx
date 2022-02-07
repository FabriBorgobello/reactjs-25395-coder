import React, { memo, useRef } from "react";

const Hijo = ({ person, saludar }) => {
  const [counter, setCounter] = React.useState(0);
  const renders = useRef(0);

  return (
    <div className="container">
      <h3>Hijo</h3>
      <p>Hola: {person.name}</p>
      <button onClick={saludar}>Saludar</button>
      <p>Contador: {counter}</p>
      <p>Renderizados: {renders.current++}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default memo(Hijo);
