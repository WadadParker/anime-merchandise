import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";

import { ProductContext,ProductProvider } from "./context/ProductContext";
import { AuthProvider,AuthContext } from "./context/AuthContext";
import { CartWishlistContext,CartWishlistProvider } from "./context/CartWishlistContext";
import { AddressContext,AddressProvider } from "./pages/addressPage/AddressContext";


export {AuthContext};
export {ProductContext};
export {CartWishlistContext};
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AddressProvider>
        <CartWishlistProvider>
          <AuthProvider>
            <ProductProvider>
              <App />
            </ProductProvider>
          </AuthProvider>
        </CartWishlistProvider>
      </AddressProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
