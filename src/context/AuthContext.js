import {createContext,useState,useReducer} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext=createContext();

export const AuthProvider=({children})=>
{
    const location=useLocation();
    const navigate=useNavigate();
    const [isLoggedIn,setIsLoggedIn]=useState(false);

    const AuthReducer=(auth,{type,payload,inputField})=>
    {
        switch(type)
        {
            case "EMAIL":
                return {...auth,email:payload};
            case "PASSWORD":
                return {...auth,password:payload};   
            
            case "SIGN_UP":
                return {...auth,signUp:{...auth.signUp,[inputField]:payload}}        
        }
    }

    const initialState={
        email:"wadadparker@gmail.com",
        password:"wadadparker",
        signUp:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},
    }
    const [authState,dispatch]=useReducer(AuthReducer,initialState);
    const {email,password,signUp:{firstName,lastName,email:newEmail,password:newPassword,confirmPassword}}=authState;

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
            toast.success("Login Succesfull, Dattebayo!", {autoClose:2000});
            console.log(location?.state?.from?.pathname);
        }
        }
        catch(error){
            console.log(error);
            toast.error("Please check your credentials");
        }
    }

    const passwordMatch=()=>
    { if(newPassword===confirmPassword)return true; return false}

    const signUpHandler=async ()=>
    {   
        if(passwordMatch)
        {
        try{
        const response=await axios.post("/api/auth/signup",{newEmail,newPassword,firstName,lastName})
        if(response.status===201)
        {
            localStorage.setItem("user", JSON.stringify(response.data.createdUser));
            localStorage.setItem("token", JSON.stringify(response.data.encodedToken));
            setIsLoggedIn(true);
            navigate(-2);
            toast.success("Sign Up Succesfull, Dattebayo!", {autoClose:2000})
            console.log(location?.state?.from?.pathname,"working",response.data);
        }
        }
        catch(error){
            console.log(error);
            toast.error("Account already exists");
        }
    }
        else {
            toast.error("Passwords do not match");
        }  
    }

    

    return (
        <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn, authState, dispatch, loginHandler, signUpHandler}}>
            {children}
        </AuthContext.Provider>
    ) 
}