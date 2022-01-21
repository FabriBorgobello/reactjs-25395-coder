import "./App.css";
import ItemContainer from "./components/ItemContainer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Welcome</h1>
      <ItemContainer />
    </div>
  );
}

export default App;

// const getPoke = async () => {
//   const response = await fetch(URL);
//   const json = await response.json();
//   console.log(json);
// };
// getPoke();
