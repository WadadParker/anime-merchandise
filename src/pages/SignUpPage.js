import { Link } from "react-router-dom"

import { NavBar } from "../components/NavBar"

export const SignUpPage=()=>
{
    return (<>
        <NavBar />
        <div className="body-container">
            <div className="Main">
        <h2>Sign-Up</h2>
        <div className="container">
          <b>
            <label for="inputOne">Email: </label>
          </b>
          <input name="inputOne"></input>
          <b>
            <label>Password: </label>
          </b>
          <input></input>
          <button>Sign-in</button>
        </div>
        <a href="">Forgot Password?</a>
        <Link to="/login">Already have an Account</Link>
      </div>
        </div>
        </>    
    )
}