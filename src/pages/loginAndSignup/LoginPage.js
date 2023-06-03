import { Link } from "react-router-dom";
import { useContext } from "react";

import { NavBar } from "../../components/navbar/NavBar";
import { AuthContext } from "../../context/AuthContext";
import { CartWishlistContext } from "../../context/CartWishlistContext";

export const LoginPage = () => {
  const { getCart, getWishlist } = useContext(CartWishlistContext);
  const { authState, dispatch, loginHandler } = useContext(AuthContext);
  const { email, password, passwordIcon } = authState;

  const changeHandlerForEmail = (text) => {
    dispatch({ type: "EMAIL", payload: text });
  };
  const changeHandlerForPassword = (text) => {
    dispatch({ type: "PASSWORD", payload: text });
  };

  return (
    <>
      <NavBar />
      <div className="body-container">
        <div className="Main">
          <h2>Login</h2>
          <div className="container">
            <b>
              <label htmlFor="inputOne">Email: </label>
            </b>
            <input
              name="inputOne"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => changeHandlerForEmail(e.target.value)}
            ></input>
            <b>
              <label>Password: </label>
            </b>
            <div>
              <input
                type={passwordIcon ? "password" : "text"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => changeHandlerForPassword(e.target.value)}
              ></input>
              {passwordIcon ? (
                <i
                  class="fa-solid fa-eye-slash"
                  onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-eye"
                  onClick={() => dispatch({ type: "TOGGLE_PASSWORD" })}
                ></i>
              )}
            </div>
            <button onClick={() => loginHandler(getCart, getWishlist)}>
              Login
            </button>
            <button
              style={{ marginTop: "1rem" }}
              onClick={() => {
                dispatch({ type: "EMAIL", payload: "wadadparker@gmail.com" });
                dispatch({ type: "PASSWORD", payload: "ilovejaanu" });
              }}
            >
              Enter Guest Credentials
            </button>
          </div>
          <span href="">Forgot Password?</span>
          <Link to="/signup">Create new Account</Link>
        </div>
      </div>
    </>
  );
};
