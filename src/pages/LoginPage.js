import {Link} from "react-router-dom";
import { useContext } from "react";

import { NavBar } from "../components/NavBar"
import { AuthContext,CartWishlistContext } from "..";

export const LoginPage=()=>
{
  const {getCart}=useContext(CartWishlistContext);
  const {authState,dispatch,loginHandler}=useContext(AuthContext);
  const {email,password}=authState;

  const changeHandlerForEmail=(text)=>
  { 
    dispatch({type:"EMAIL", payload:text})
  }
  const changeHandlerForPassword=(text)=>
  { 
    dispatch({type:"PASSWORD", payload:text})
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
          <button onClick={()=>loginHandler(getCart)}>Login</button>
        </div>
        <a href="">Forgot Password?</a>
        <Link to="/signup">Create new Account</Link>
      </div>
        </div>
        </>    
    )
}