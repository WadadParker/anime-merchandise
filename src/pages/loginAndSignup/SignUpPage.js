import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import { NavBar } from "../../components/navbar/NavBar";
import "./LoginAndSignUp.css";

export const SignUpPage = () => {
  const { authState, dispatch, checkEmptyFields } = useContext(AuthContext);
  const {
    signUp: { firstName, lastName, email, password, confirmPassword },
    passwordIcon,
    confirmPasswordIcon,
  } = authState;
  return (
    <>
      <NavBar />
      <div className="body-container-signup">
        <div className="Main signup">
          <h2>Sign-Up</h2>
          <div className="container">
            <div className="sub-container">
              <b>
                <label htmlFor="first-name">First Name: </label>
              </b>
              <input
                id="first-name"
                value={firstName}
                onChange={(e) =>
                  dispatch({
                    type: "SIGN_UP",
                    payload: e.target.value,
                    inputField: "firstName",
                  })
                }
              ></input>
              <b>
                <label htmlFor="last-name">Last Name: </label>
              </b>
              <input
                id="last-name"
                value={lastName}
                onChange={(e) =>
                  dispatch({
                    type: "SIGN_UP",
                    payload: e.target.value,
                    inputField: "lastName",
                  })
                }
              ></input>
            </div>

            <div className="sub-container">
              <b>
                <label htmlFor="email">Email-ID: </label>
              </b>
              <input
                id="email"
                value={email}
                onChange={(e) =>
                  dispatch({
                    type: "SIGN_UP",
                    payload: e.target.value,
                    inputField: "email",
                  })
                }
              ></input>
              <b>
                <label htmlFor="password">Password: </label>
              </b>
              <div>
                <input
                  type={passwordIcon ? "password" : "text"}
                  id="password"
                  value={password}
                  onChange={(e) =>
                    dispatch({
                      type: "SIGN_UP",
                      payload: e.target.value,
                      inputField: "password",
                    })
                  }
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
            </div>

            <b>
              <label for="confirm-password">Confirm Password: </label>
            </b>
            <div>
              <input
                type={confirmPasswordIcon ? "password" : "text"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) =>
                  dispatch({
                    type: "SIGN_UP",
                    payload: e.target.value,
                    inputField: "confirmPassword",
                  })
                }
              ></input>
              {confirmPasswordIcon ? (
                <i
                  class="fa-solid fa-eye-slash"
                  style={{ marginLeft: "-22rem" }}
                  onClick={() => dispatch({ type: "TOGGLE_CONFIRM_PASSWORD" })}
                ></i>
              ) : (
                <i
                  class="fa-solid fa-eye"
                  style={{ marginLeft: "-22rem" }}
                  onClick={() => dispatch({ type: "TOGGLE_CONFIRM_PASSWORD" })}
                ></i>
              )}
            </div>
            <button id="sign-in-button" onClick={() => checkEmptyFields()}>
              Sign-in
            </button>
          </div>
          <Link to="/login">Already have an Account</Link>
        </div>
      </div>
    </>
  );
};
