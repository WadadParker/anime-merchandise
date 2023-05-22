import { Link } from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "..";

import { NavBar } from "../components/NavBar"

export const SignUpPage=()=>
{
  const {authState,dispatch, signUpHandler}=useContext(AuthContext);
  const {signUp:{firstName,lastName,email,password,confirmPassword}}=authState;
    return (<>
        <NavBar />
        <div className="body-container-signup">
            <div className="Main signup">
        <h2>Sign-Up</h2>
        <div className="container">

          <div className="sub-container">
            <b>
              <label for="first-name">First Name: </label>
            </b>
            <input id="first-name" value={firstName} onChange={(e)=>dispatch({type:"SIGN_UP",paylod:e.target.value,inputField:"firstName"})}></input>
            <b>
              <label htmlFor="last-name">Last Name: </label>
            </b>
            <input id="last-name" value={lastName} onChange={(e)=>dispatch({type:"SIGN_UP",paylod:e.target.value,inputField:"lastName"})}></input>
          </div>

          <div className="sub-container">
          
            <b>
              <label htmlFor="email">Email-ID: </label>
            </b>
            <input id="email" value={email} onChange={(e)=>dispatch({type:"SIGN_UP",paylod:e.target.value,inputField:"email"})}></input>
            <b>
              <label htmlFor="password">Password: </label>
            </b>
            <input htmlFor="password" value={password} onChange={(e)=>dispatch({type:"SIGN_UP",paylod:e.target.value,inputField:"password"})}></input>

          </div>

          <b><label for="confirm-password">Confirm Password: </label></b>
          <input id="confirm-password" value={confirmPassword} onChange={(e)=>dispatch({type:"SIGN_UP",paylod:e.target.value,inputField:"confirmPassword"})}></input>

          <button id="sign-in-button" onClick={signUpHandler}>Sign-in</button>
        </div>
        <Link to="/login">Already have an Account</Link>
      </div>
        </div>
        </>    
    )
}