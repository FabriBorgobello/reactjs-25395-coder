import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import Navbar from "./components/Navbar";
import VisionPage from "./pages/VisionPage";
import MisionPage from "./pages/MisionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />}>
            <Route path="vision" element={<VisionPage />} />
            <Route path="mision" element={<MisionPage />} />
          </Route>
          <Route path="products">
            <Route index element={<ProductsPage />} />
            <Route path=":productId" element={<ProductDetailPage />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const getPoke = async () => {
//   const response = await fetch(URL);
//   const json = await response.json();
//   console.log(json);
// };
// getPoke();
