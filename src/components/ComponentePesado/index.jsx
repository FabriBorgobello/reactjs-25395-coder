import React from "react";

const ComponentePesado = () => {
  return (
    <div
      style={{
        width: 300,
        height: 300,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "1rem",
        fontSize: "2rem",
        backgroundColor: "red",
        marginTop: "2rem",
      }}
    >
      Este es un componente pesado
    </div>
  );
};

export default ComponentePesado;
