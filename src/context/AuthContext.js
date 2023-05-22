import {createContext,useState,useReducer} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext=createContext();

export const AuthProvider=({children})=>
{
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const AuthReducer=(auth,{type,payload})=>
    {
        switch(type)
        {
            case "EMAIL":
                return {...auth,email:payload};
            case "PASSWORD":
                return {...auth,password:payload};    
        }
    }

    const initialState={
        email:"wadadparker@gmail.com",
        password:"wadadparker",
    }
    const [authState,dispatch]=useReducer(AuthReducer,initialState);
    const {email,password}=authState;

    // const location=useLocation();
    // const navigate=useNavigate();

    // const loginHandler=async ()=>
    // {
    //     try{
    //     const response=await axios.post("/api/auth/login",{email,password})
    //     if(response.status===200)
    //     {
    //         localStorage.setItem("user", JSON.stringify(response.data.foundUser));
    //         localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
    //         setIsLoggedIn(true);
    //         navigate(location?.state?.from?.pathname);
    //         toast.success("Login Succesfull, Dattebayo!", {autoClose:2000})
    //     }
    //     }
    //     catch(error){
    //         console.log(error);
    //         toast.error("Please check your credentials");
    //     }
    // }

    

    return (
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn, authState, dispatch}}>
            {children}
        </AuthContext.Provider>
    ) 
}