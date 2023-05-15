export const NavBar=()=>
{
    return (
        <nav className="NavBar">
            <p>AnimeCon</p>
            {/* <label><i class="fa-solid fa-magnifying-glass"></i></label> */}
            <input type="search" placeholder="Search for products"></input>
            <div className="nav-container">
            <i class="fa-solid fa-heart"></i>
            <i class="fa-solid fa-cart-shopping"></i>
            <i class="fa-solid fa-user"></i>
            </div>
        </nav>
    )
}