import "./App.css";
import logo from "./logo.png";
import {Route,Routes} from "react-router-dom";

import {NavBar} from "./components/NavBar";
import { RequiresAuth } from "./components/RequiresAuth";
import Mockman from "mockman-js";

import { ProductPage } from "./pages/ProductPage";
import {Home} from "./pages/Home";
import { LoginPage } from "./pages/LoginPage";
import { SignUpPage } from "./pages/SignUpPage";
import { ProductCard } from "./pages/ProductCard";
import { CartPage } from "./pages/CartPage";
import { WishListPage } from "./pages/WishlistPage";

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products/:productId" element={<ProductCard />} />
      <Route path="/cart" element={<RequiresAuth><CartPage /></RequiresAuth>} />
      <Route path="/wishlist" element={<WishListPage />} />
      <Route path="/mock-api" element={<Mockman />} />
    </Routes>

    </div>
  );
}

export default App;
