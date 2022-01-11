import UserCard from "../UserCard";

const CardContainer = () => {
  const saludar = () => {
    console.log("Holis :D");
  };
  const isAdult = (age) => {
    return age >= 18;
  };

  return (
    <>
      <UserCard
        name="Felipe"
        age={40 + 40}
        job="Arquitecto"
        hobbies={["futbol", "codear"]}
        saludar={saludar}
        elemento={<p>Esto viene del componente padre</p>}
        isAdult={isAdult(40)}
      >
        Esto también es un children
      </UserCard>
      <UserCard
        name="Felipe"
        age={40 + 40}
        job="Arquitecto"
        hobbies={["futbol", "codear"]}
        saludar={saludar}
        elemento={<p>Esto viene del componente padre</p>}
        isAdult={isAdult(40)}
      >
        Esto también es un children
      </UserCard>{" "}
      <UserCard
        name="Felipe"
        age={40 + 40}
        job="Arquitecto"
        hobbies={["futbol", "codear"]}
        saludar={saludar}
        elemento={<p>Esto viene del componente padre</p>}
        isAdult={isAdult(40)}
      >
        Esto también es un children
      </UserCard>
    </>
  );
};
export default CardContainer;
