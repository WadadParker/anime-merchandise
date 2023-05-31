import { useContext } from "react"
import { useNavigate } from "react-router";

import { CartWishlistContext } from "..";
import { NavBar } from "../components/NavBar"
import { LoadingSpinner } from "../components/Loader";

export const CartPage=()=>
{
    const {state,incrementQuantity,decrementQuantity, deleteFromCart,totalPrice,inWishlist,addToWishlist,removeFromWishlist,isLoading}=useContext(CartWishlistContext);
    const {cartList}=state;
    const navigate=useNavigate();

    return (
        <>
        <NavBar />

       {isLoading 
       ?(<LoadingSpinner />)
       :<><h1>My Cart ({cartList.length})</h1>
        <div className="cart-container">
        <ul className="cart-list-container">
            {cartList.map((item)=>{
                const {_id,title,img,rating,qty,price}=item;
                return(
            <li className="cart-item-container" key={_id}>
                {inWishlist(_id)?(<i class="fa-solid fa-heart wishlist" onClick={()=>addToWishlist(item)}></i>)
                :(<i class="fa-solid fa-heart-crack wishlist" onClick={()=>removeFromWishlist(_id)}></i>)}
                <img src={img} width={200} height={200} />
                <div className="cart-item-description">
                <p>{title}</p>   
                <b style={{flexGrow:"1"}}>Rs {price}</b>
                    <div className="quantity-container">
                        <label>Quantity: </label>
                        <button onClick={()=>decrementQuantity(_id)} disabled={qty<=1}> - </button>
                        <span>{qty}</span>
                        <button onClick={()=>incrementQuantity(_id)}> + </button>
                    </div>
                </div>
                <i class="fa-solid fa-trash" onClick={()=>{deleteFromCart(_id)}}></i>
            </li>
            )})}
            
        </ul>    
        <div className="bill-container">
            <strong style={{fontSize:"1.5rem"}}>Billing Information</strong>
            {cartList.map((item)=>{
                const {_id,title,price,qty}=item;
                return(
            <li className="bill-item" key={_id}>
                <p style={{flexGrow:"1"}}>{title} <b>x {qty}</b></p>
                <p><b>{price*qty}</b></p>
            </li>
                )})}

           <span><hr /></span>
            <li className="bill-item">
                <p style={{flexGrow:"1"}}>Total Price</p>
                <p><b>{totalPrice}</b></p>
            </li>
            <button onClick={()=>navigate("/checkout")}>Place Order</button>
        </div>
    </div></>}
    </>
    )
}