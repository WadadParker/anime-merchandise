import "./App.css";
import logo from "./logo.png";
import {Route,Routes} from "react-router-dom";

import {NavBar} from "./components/NavBar";

import { ProductPage } from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <NavBar />
      
    <Routes>
      <Route path="/products" element={<ProductPage />} />
    </Routes>

    </div>
  );
}

export default App;
