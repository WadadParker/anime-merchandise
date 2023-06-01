import "./App.css";
import logo from "./logo.png";
import {Route,Routes} from "react-router-dom";

import {NavBar} from "./components/navbar/NavBar";
import Mockman from "mockman-js";

import { ProductPage } from "./pages/productListing/ProductPage";
import {Home} from "./pages/Home";
import { LoginPage } from "./pages/loginAndSignup/LoginPage";
import { SignUpPage } from "./pages/loginAndSignup/SignUpPage";
import { ProductCard } from "./pages/ProductCard";
import { CartPage } from "./pages/cartAndWishlistPage/CartPage";
import { WishListPage } from "./pages/cartAndWishlistPage/WishlistPage";

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products/:productId" element={<ProductCard />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/mock-api" element={<Mockman />} />
    </Routes>

    </div>
  );
}

export default App;
