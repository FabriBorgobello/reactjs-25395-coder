import useFetchData from "../hooks/useFetchData";

const AboutPage = () => {
  const URL = "https://pokeapi.co/api/v2/pokemon?limit=100&offset=200";
  const { data, isLoading, error } = useFetchData(URL);

  return (
    <div>
      <h1>AboutPage</h1>
    </div>
  );
};

export default AboutPage;
