import { useContext } from "react"
import { useNavigate } from "react-router";

import { NavBar } from "../../components/NavBar";
import { useParams } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import { CartWishlistContext } from "../..";

import "./ProductCard.css"

export const ProductCard=()=>
{
  const {inCart,addToCart,inWishlist,removeFromWishlist,addToWishlist}=useContext(CartWishlistContext);
  const {state:{productList}}=useContext(ProductContext);  
  const navigate=useNavigate();  

  const {productId}=useParams();
  const product=productList.find(({_id})=>_id==productId);
    return (<>
    <NavBar />
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className="product-card-container">
        <img src={product?.img} width={300} height={350}/>
        <div className="product-details-container">
            <p>{product?.title}</p>
            <strong className="price-with-flex-grow">Rs {product?.price}</strong>
            <div className="quantity-container">
                <p>{product?.desc}</p>
            </div>
            
        </div>
        <div className="button-container">
        {inCart(product?._id)
            ?(<button className="add-to-cart" onClick={()=>addToCart(product)}>Add to Cart</button>)
            :(<button className="go-to-cart" onClick={()=>navigate("/cart")}>Go to Cart</button>)
        }
        {inWishlist(product?._id)
            ?(<button className="add-to-cart" onClick={()=>addToWishlist(product)}>Add to Wishlist</button>)
            :(<button className="remove-from-wishlist" onClick={()=>removeFromWishlist(product?._id)}>Remove from Wishlist</button>)
        }
            </div>
        </div>
    </div>    
        </>
    )
}