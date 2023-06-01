import "./App.css";
import logo from "./logo.png";
import {Route,Routes} from "react-router-dom";

import {NavBar} from "./components/navbar/NavBar";
import { RequiresAuth } from "./components/RequiresAuth";
import Mockman from "mockman-js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ProductPage } from "./pages/productListing/ProductPage";
import {Home} from "./pages/Home";
import { LoginPage } from "./pages/loginAndSignup/LoginPage";
import { SignUpPage } from "./pages/loginAndSignup/SignUpPage";
import { ProductCard } from "./pages/ProductCard";
import { CartPage } from "./pages/cartAndWishlistPage/CartPage";
import { WishListPage } from "./pages/cartAndWishlistPage/WishlistPage";
import { AddressPage } from "./pages/addressPage/AddressPage";

function App() {
  return (
    <div className="App">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/products/:productId" element={<ProductCard />} />
      <Route path="/cart" element={<RequiresAuth><CartPage /></RequiresAuth>} />
      <Route path="/wishlist" element={<RequiresAuth><WishListPage /></RequiresAuth>} />
      <Route path="/mock-api" element={<Mockman />} />
      <Route path="/checkout" element={<RequiresAuth><AddressPage /></RequiresAuth>} />
    </Routes>

    </div>
  );
}

export default App;
