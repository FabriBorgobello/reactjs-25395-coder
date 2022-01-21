import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
const URL = "http://localhost:3001/usuarios/";

const CrudUsuarios = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const getUsuarios = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setErrors(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUsuarios();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nuevoUsuario = {
      [e.target.nombre.name]: e.target.nombre.value,
      [e.target.edad.name]: e.target.edad.value,
    };

    const response = await fetch(URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevoUsuario),
    });
    const data = await response.json();
    console.log("Producto creado correctamente", data);
  };

  const handleDelete = async (id) => {
    console.log(`${URL}${id}`);
    const response = await fetch(`${URL}${id}`, { method: "DELETE" });
    const data = await response.json();
    console.log("Producto eliminado correctamente", data);
  };

  if (isLoading) {
    return <p>Cargando...</p>;
  } else if (errors) {
    return <p>Ha habido un error</p>;
  } else
    return (
      <div className="container">
        <table className="table">
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Acciones</th>
          </tr>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.nombre}</td>
                <td>{user.edad}</td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Borrar</button>
                </td>
              </tr>
            );
          })}
        </table>
        <br />
        <br />
        <form className="form-nuevo-usuario" onSubmit={handleSubmit}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" />
          <label htmlFor="edad">Edad</label>
          <input type="text" id="edad" name="edad" />
          <input type="submit" value="Crear nuevo usuario" />
        </form>
        <div className="padre">
          <div className="hijo">
            <div className="nieto"></div>
          </div>
        </div>

        <>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="info">Info</Button>
          <Button variant="light">Light</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </>
      </div>
    );
};

export default CrudUsuarios;
