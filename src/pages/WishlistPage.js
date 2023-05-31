import { useContext } from "react";

import { CartWishlistContext } from "..";
import { NavBar } from "../components/NavBar";
import { useNavigate } from "react-router";

export const WishListPage=()=>
{
    const {state, inCart, addToCart, removeFromWishlist,incrementQuantity}=useContext(CartWishlistContext);
    const {wishlist}=state;
    const navigate=useNavigate();

    const clickHandler=(id,cartItem)=>
    {
        if(inCart(id))
        {
            addToCart(cartItem)
        }
        else 
        {
            incrementQuantity(id)
        }
    }
    return (
        <>
        <NavBar />
        <div>
            <h1>My WishList({wishlist.length})</h1>
        <ul className="products">
            {wishlist?.map(item=>{
                const {_id,title,img,price}=item;
                return(
                    <li key={_id}>
                        <img src={img} width={200} height={250} />
                        <p>{title}</p>
                        <strong>Rs {price}</strong>
                        <button className="add-to-cart" onClick={()=>clickHandler(_id,item)}>Add to Cart</button>
                        <button className="remove-from-wishlist" onClick={()=>removeFromWishlist(_id)}>Remove from Wishlist</button>    
                    </li>
                )})}
        </ul>    
        </div>

        </>
    )
}