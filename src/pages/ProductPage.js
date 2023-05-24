import {useContext} from "react";
import { useNavigate } from "react-router";

import {ProductContext} from "..";
import { CartWishlistContext } from "..";
import {NavBar} from "../components/NavBar"
import { FilterBar } from "../components/FilterBar"

export const ProductPage=()=>
{
    const {finalProductList}=useContext(ProductContext);
    const navigate=useNavigate();
    const {addToCart, addToWishlist, inWishlist,inCart,incrementQuantity, removeFromWishlist}=useContext(CartWishlistContext);

    const clickHandler=(cartItem)=>
    {
        if(!inCart(cartItem._id))
        incrementQuantity(cartItem._id);
        else
        addToCart(cartItem);
    }

    return (
            <><NavBar />
            <h1 >All Products</h1>
        <div style={{display:"flex"}}>
            
            <FilterBar />
            <div className="product-listing-page">
                
                <ul className="products">
                    {finalProductList?.map((item)=>
                   {    const {_id,title,img,rating,price}=item;
                    return (
                        <li key={_id}>
                            {inWishlist(_id)?(<i class="fa-solid fa-heart wishlist" onClick={()=>addToWishlist(item)}></i>)
                            :(<i class="fa-solid fa-heart-crack wishlist" onClick={()=>removeFromWishlist(_id)}></i>)}
                            <img src={img} width={200} height={250}/>
                            <p>{title}</p>
                            <span style={{marginTop:"-0.7rem"}}>Rating: {rating}</span>
                            <strong>Rs {price}</strong>
                            {inCart(_id)
                            ?(<button className="add-to-cart" onClick={()=>clickHandler(item)}>Add to Cart</button>)
                            :(<button className="go-to-cart" onClick={()=>navigate("/cart")}>Go to Cart</button>)
                            }
                        </li>
                    )})}

                </ul>
            </div>
        </div>
        </>
    )
}