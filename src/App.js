import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Navbar from "./components/Navbar";
import VisionPage from "./pages/VisionPage";
import MisionPage from "./pages/MisionPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import { UserProvider } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";
import CartPage from "./pages/CartPage";
import ThankYouPage from "./pages/ThankYouPage";
import PerformancePage from "./pages/PerformancePage";

function App() {
  return (
    <UserProvider>
      <CartProvider>
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
                <Route path=":productId" element={<ProductDetailPage />} />
              </Route>
              <Route path="category/:categoryId" element={<HomePage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="thanks/:orderId" element={<ThankYouPage />} />
              <Route path="performance" element={<PerformancePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
