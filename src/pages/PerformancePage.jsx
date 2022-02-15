import * as React from "react";
import ComponentePesado from "../components/ComponentePesado";

const PerformancePage = () => {
  const [showComponent, setShowComponent] = React.useState(false);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>React Performance</h1>
      <br />
      <button onClick={() => setShowComponent((prev) => !prev)}>
        Mostrar componente pesado
      </button>
      <br />
      {showComponent && <ComponentePesado />}
    </div>
  );
};

export default PerformancePage;
