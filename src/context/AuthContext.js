import { createContext, useState, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const AuthReducer = (auth, { type, payload, inputField }) => {
    switch (type) {
      case "EMAIL":
        return { ...auth, email: payload };
      case "PASSWORD":
        return { ...auth, password: payload };

      case "SIGN_UP":
        return { ...auth, signUp: { ...auth.signUp, [inputField]: payload } };
      case "TOGGLE_PASSWORD":
        return { ...auth, passwordIcon: !auth.passwordIcon };
      case "TOGGLE_CONFIRM_PASSWORD":
        return { ...auth, confirmPasswordIcon: !auth.confirmPasswordIcon };
    }
  };

  const initialState = {
    email: "",
    password: "",
    signUp: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    passwordIcon: true,
    confirmPasswordIcon: true,
  };
  const [authState, dispatch] = useReducer(AuthReducer, initialState);
  const {
    email,
    password,
    signUp: {
      firstName,
      lastName,
      email: newEmail,
      password: newPassword,
      confirmPassword,
    },
  } = authState;

  const loginHandler = async (getCart, getWishlist) => {
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      if (response.status === 200) {
        localStorage.setItem("user", response.data.foundUser);
        localStorage.setItem("token", response.data.encodedToken);
        setIsLoggedIn(true);
        navigate(-1);
        toast.success("Login Successfull, Dattebayo!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        getCart();
        getWishlist();
        console.log(location?.state?.from?.pathname);
      }
    } catch (error) {
      console.log(error);
      toast.error("Please check your credentials!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const passwordMatch = () => {
    if (newPassword === confirmPassword) return true;
    return false;
  };

  const checkEmptyFields = () => {
    if (
      firstName === "" ||
      lastName === "" ||
      newEmail === "" ||
      newPassword === "" ||
      confirmPassword === ""
    )
      toast.warn("Please enter all fields", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    else {
      signUpHandler(newEmail, newPassword);
    }
  };

  const signUpHandler = async (email, password) => {
    console.log(email, "This is signup email");
    if (passwordMatch()) {
      try {
        const response = await axios.post("/api/auth/signup", {
          email,
          password,
          firstName,
          lastName,
        });
        if (response.status === 201) {
          localStorage.setItem("user", response.data.createdUser);
          localStorage.setItem("token", response.data.encodedToken);
          setIsLoggedIn(true);
          navigate(-2);
          toast.success("Signup Successfull, Dattebayo!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        }
      } catch (error) {
        console.log(error);
        toast.error("Account already exists", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.warn("Passwords do not match", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        authState,
        dispatch,
        loginHandler,
        checkEmptyFields,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
