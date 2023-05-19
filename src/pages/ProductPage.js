import {useContext} from "react";

import {ProductContext} from "..";
import {NavBar} from "../components/NavBar"
import { FilterBar } from "../components/FilterBar"

export const ProductPage=()=>
{
    const {state,finalProductList}=useContext(ProductContext);
    const {productList}=state;

    return (
            <><NavBar />
            <h1 >All Products</h1>
        <div style={{display:"flex"}}>
            
            <FilterBar />
            <div className="product-listing-page">
                
                <ul className="products">
                    {finalProductList?.map(({_id,title,img,rating,price})=>
                    (
                        <li key={_id}>
                            <img src={img} width={200} height={250}/>
                            <p>{title}</p>
                            <span style={{marginTop:"-0.7rem"}}>Rating: {rating}</span>
                            <strong>Rs {price}</strong>
                            <button className="go-to-cart">Go to Cart</button>
                            <button className="add-to-cart">Add to Cart</button>
                        </li>
                    ))}

                </ul>
            </div>
        </div>
        </>
    )
}