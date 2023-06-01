import { Link } from "react-router-dom";

import { NavBar } from "../../components/navbar/NavBar";
import "./LoginAndSignUp.css";

export const LoginPage = () => {
  return (
    <>
      <NavBar />
      <div className="body-container">
        <div className="Main">
          <h2>Login</h2>
          <div className="container">
            <b>
              <label for="inputOne">Email: </label>
            </b>
            <input name="inputOne"></input>
            <b>
              <label>Password: </label>
            </b>
            <input></input>
            <button>Login</button>
          </div>
          <a href="">Forgot Password?</a>
          <Link to="/signup">Create new Account</Link>
        </div>
      </div>
    </>
  );
};
