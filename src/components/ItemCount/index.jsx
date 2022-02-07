import * as React from "react";
import "./styles.scss";

const ItemCount = ({ counter, setCounter }) => {
  return (
    <div className="counter-container">
      <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
    </div>
  );
};

export default ItemCount;
