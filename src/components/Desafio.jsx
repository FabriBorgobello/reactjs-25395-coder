import React, { useState } from "react";

export default function Desafio() {
  const [formState, setFormState] = useState({
    name: "",
    surname: "",
    age: "",
  });

  function handleChange(evt) {
    setFormState((prev) => ({ ...prev, [evt.target.name]: evt.target.value }));
  }
  function onSubmit(e) {
    e.preventDefault();
    console.log(
      `Your name is ${formState.name} ${formState.surname} and you have ${formState.age} years`
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <InputAndLabel label="Nombre" name="name" onChange={handleChange} />
      <InputAndLabel label="Apellido" name="surname" onChange={handleChange} />
      <InputAndLabel label="Edad" name="age" onChange={handleChange} />

      <button
        disabled={
          formState.name !== "" ||
          formState.surname !== "" ||
          formState.age !== ""
        }
        type="submit"
      >
        Crear orden
      </button>
    </form>
  );
}

const InputAndLabel = ({ label, name, onChange }) => {
  return (
    <div style={{ display: "flex", marginBottom: 8 }}>
      <label htmlFor={label} style={{ marginRight: 4 }}>
        {label}
      </label>
      <input type="text" onChange={onChange} name={name} id={label} />
    </div>
  );
};
