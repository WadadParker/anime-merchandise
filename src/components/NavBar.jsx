import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";

import {ProductContext,AuthContext,CartWishlistContext} from "..";

export const NavBar=()=>
{
    const {state,dispatch}=useContext(ProductContext);
    const {isLoggedIn,setIsLoggedIn} = useContext(AuthContext);
    const {logoutHandler}=useContext(CartWishlistContext);
    const {search}=state;

    const navigate=useNavigate();
    return (
        <nav className="NavBar">
            <Link to="/">AnimeCon</Link>
            {/* <label><i class="fa-solid fa-magnifying-glass"></i></label> */}
            <input type="search" placeholder="Search for products" value={search} onChange={(e)=>dispatch({type:"SEARCH",payload:e.target.value})} ></input>
            <div className="nav-container">
            <i class="fa-solid fa-heart" onClick={()=>navigate("/wishlist")}></i>
            <i class="fa-solid fa-cart-shopping" onClick={()=>navigate("/cart")}></i>
            {isLoggedIn?(<button onClick={()=>logoutHandler(setIsLoggedIn)}>Logout</button>)
            :(<button onClick={()=>navigate("/login")}>Login</button>)}
            </div>
        </nav>
    )
}