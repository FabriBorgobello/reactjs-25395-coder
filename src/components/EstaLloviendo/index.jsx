import { useState, useEffect } from "react";
import LluviaHija from "../LluviaHija";

const EstaLloviendo = () => {
  const [llueve, setLlueve] = useState("Si llueve");

  useEffect(() => {
    // ESTO SE EJECUTA LUEGO DE QUE SE RENDERIZA EL COMPONENTE
    console.log("El componente se acaba de montar / actualizar");

    return () => {
      // ESTO SE EJECUTA ANTES DE DESMONTARSE EL COMPONENTE
      console.log("El componente se está por desmontar");
    };
  }, []);

  /**
   * '' = SE EJECUTA AL MONTAR Y EN CADA ACTUALIZACIÓN.
   * [] = SE EJECUTA AL MONTAR.
   * [X] = SE EJECUTA AL MONTAR Y AL ACTUALIZAR X
   */

  const cambiarLluvia = () => {
    if (llueve === "Si llueve") {
      setLlueve("No llueve");
    } else {
      setLlueve("Si llueve");
    }
  };

  return (
    <div>
      <button onClick={cambiarLluvia}>Cambiar</button>
      <LluviaHija estaLloviendo={llueve} />
    </div>
  );
};

export default EstaLloviendo;
