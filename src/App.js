import "./App.css";
import logo from "./logo.png";
import {Route,Routes} from "react-router-dom";

import {NavBar} from "./components/NavBar";

import { ProductPage } from "./pages/ProductPage";
import {Home} from "./pages/Home";

function App() {
  return (
    <div className="App">
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<ProductPage />} />
    </Routes>

    </div>
  );
}

export default App;
