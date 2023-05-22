import {useContext} from "react";
import { Navigate, useLocation } from "react-router";

import { AuthContext } from "../context/AuthContext";

export const RequiresAuth=({children})=>
{
    const {isLoggedIn}=useContext(AuthContext);
    const location= useLocation();
    console.log(location);
    return isLoggedIn ? (
        children
    ) : (
        <Navigate to="/login" state={{from:location}}/>
    )
}