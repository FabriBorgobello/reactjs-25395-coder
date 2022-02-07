import React, { useCallback, useMemo } from "react";
import Hijo from "../Hijo";

const Padre = () => {
  const [inputValue, setInputValue] = React.useState("");
  const [name, setname] = React.useState("Maxi");

  const person = useMemo(() => ({ name, age: 30 }), [name]);

  const saludar = useCallback(() => console.log("Holis"), []);

  return (
    <div className="container">
      <h2>Componente padre</h2>
      <input
        type="text"
        placeholder="Escribe algo"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <br />
      <br />
      <Hijo person={person} saludar={saludar} />
    </div>
  );
};

export default Padre;

// React.memo >>> COMPONENTS
// useMemo >>> ARRAY / OBJS
// useCallback >>> Funciones
