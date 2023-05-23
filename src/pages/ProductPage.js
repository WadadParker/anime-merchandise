import {useContext} from "react";

import {ProductContext} from "..";
import { CartWishlistContext } from "..";
import {NavBar} from "../components/NavBar"
import { FilterBar } from "../components/FilterBar"

export const ProductPage=()=>
{
    const {finalProductList}=useContext(ProductContext);
    const {addToCart}=useContext(CartWishlistContext);

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
                            <img src={img} width={200} height={250}/>
                            <p>{title}</p>
                            <span style={{marginTop:"-0.7rem"}}>Rating: {rating}</span>
                            <strong>Rs {price}</strong>
                            <button className="go-to-cart">Go to Cart</button>
                            <button className="add-to-cart" onClick={()=>addToCart(item)}>Add to Cart</button>
                        </li>
                    )})}

                </ul>
            </div>
        </div>
        </>
    )
}