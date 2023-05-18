import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";

import { ProductContext,ProductProvider } from "./backend/context/ProductContext";

export {ProductContext};
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <ProductProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
