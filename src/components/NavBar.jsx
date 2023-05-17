import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export const NavBar=()=>
{
    const navigate=useNavigate();
    return (
        <nav className="NavBar">
            <Link to="/">AnimeCon</Link>
            {/* <label><i class="fa-solid fa-magnifying-glass"></i></label> */}
            <input type="search" placeholder="Search for products"></input>
            <div className="nav-container">
            <i class="fa-solid fa-heart" onClick={()=>navigate("/wishlist")}></i>
            <i class="fa-solid fa-cart-shopping" onClick={()=>navigate("/cart")}></i>
            <i class="fa-solid fa-user"></i>
            </div>
        </nav>
    )
}