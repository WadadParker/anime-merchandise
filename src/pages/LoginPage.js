import {Link, useLocation,useNavigate} from "react-router-dom";
import { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { NavBar } from "../components/NavBar"
import { AuthContext } from "..";

export const LoginPage=()=>
{
  const {authState,dispatch,setIsLoggedIn}=useContext(AuthContext);
  const {email,password}=authState;

  const changeHandlerForEmail=(text)=>
  { 
    dispatch({type:"EMAIL", payload:text})
  }
  const changeHandlerForPassword=(text)=>
  { 
    dispatch({type:"PASSWORD", payload:text})
  }

  const location=useLocation();
    const navigate=useNavigate();

    const loginHandler=async ()=>
    {
        try{
        const response=await axios.post("/api/auth/login",{email,password})
        if(response.status===200)
        {
            localStorage.setItem("user", JSON.stringify(response.data.foundUser));
            localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
            setIsLoggedIn(true);
            navigate(location?.state?.from?.pathname);
            toast.success("Login Succesfull, Dattebayo!", {autoClose:2000})
        }
        }
        catch(error){
            console.log(error);
            toast.error("Please check your credentials");
        }
    }

    return (<>
        <NavBar />
        <div className="body-container">
            <div className="Main">
        <h2>Login</h2>
        <div className="container">
          <b>
            <label htmlFor="inputOne">Email: </label>
          </b>
          <input name="inputOne" placeholder="wadadparker@gmail.com" value={email} onChange={(e)=>changeHandlerForEmail(e.target.value)}></input>
          <b>
            <label>Password: </label>
          </b>
          <input placeholder="wadadparker" value={password} onChange={(e)=>changeHandlerForPassword(e.target.value)}></input>
          <button onClick={loginHandler}>Login</button>
        </div>
        <a href="">Forgot Password?</a>
        <Link to="/signup">Create new Account</Link>
      </div>
        </div>
        </>    
    )
}