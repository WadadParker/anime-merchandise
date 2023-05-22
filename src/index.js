import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";

import { ProductContext,ProductProvider } from "./context/ProductContext";
import { AuthProvider,AuthContext } from "./context/AuthContext";

export {AuthContext};
export {ProductContext};
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <AuthProvider>
    <ProductProvider>
    
    <App />
    
    </ProductProvider>
    </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
