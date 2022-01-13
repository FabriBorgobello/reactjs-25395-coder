import "./styles.css";

function UserCard({
  name,
  age,
  job,
  isHappy,
  hobbies,
  saludar,
  elemento,
  children,
}) {
  console.log("Children:", children);
  const myName = "Joaquin";

  return (
    <div className="card">
      <p>Nombre: {name}</p>
      <p>Edad: {age}</p>
      <p>Profesion: {job}</p>
      <p>Está feliz?: {`${isHappy}`}</p>
      <p>Hobbies: {hobbies[0]}</p>
      <p>Hobbies: {hobbies[1]}</p>
      <button onClick={saludar}>Decir hola</button>
      {elemento}
    </div>
  );
}

export default UserCard;
