import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import { ProductContext } from "../../context/ProductContext";
import { CartWishlistContext } from "../../context/CartWishlistContext";
import { AuthContext } from "../../context/AuthContext";

import "./NavBar.css";
export const NavBar = () => {
  const { state, dispatch, searchedProducts } = useContext(ProductContext);
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const { logoutHandler } = useContext(CartWishlistContext);
  const { search } = state;

  const navigate = useNavigate();
  return (
    <nav className="NavBar">
      <Link to="/" style={{textDecoration:"none",color:"black",fontSize:"2rem",padding:"0 2rem"}}>AnimeCon Hubli</Link>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="search"
          placeholder="Search for products"
          value={search}
          onChange={(e) =>
            dispatch({ type: "SEARCH", payload: e.target.value })
          }
        ></input>
        {search !== "" && (
          <div className="search-container">
            {searchedProducts.map(({ _id, title, img, price }) => (
              <li
                style={{ margin: "1rem" }}
                key={_id}
                onClick={() => {
                  navigate(`/products/${_id}`);
                  dispatch({ type: "SEARCH", payload: "" });
                }}
              >
                <div className="nav-search-container">
                  <img src={img} width={200} height={250} alt={""} />
                  <div className="nav-sub-container">
                    <strong>{title}</strong>
                    <p>Rs {price}</p>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}
      </div>
      <div className="nav-container">
        <i class="fa-solid fa-heart" onClick={() => navigate("/wishlist")}></i>
        <i
          class="fa-solid fa-cart-shopping"
          onClick={() => navigate("/cart")}
        ></i>
        {isLoggedIn ? (
          <button onClick={() => logoutHandler(setIsLoggedIn)}>Logout</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login</button>
        )}
      </div>
    </nav>
  );
};
