import { useContext,useState } from "react";
import { useNavigate } from "react-router";

import { ProductContext } from "../../context/ProductContext";
import { CartWishlistContext } from "../../context/CartWishlistContext";
import { NavBar } from "../../components/navbar/NavBar";
import { FilterBar } from "../../components/filterBar/FilterBar";
import { AuthContext } from "../../context/AuthContext";
import { LoadingSpinner } from "../../components/Loader";

import "./ProductPage.css";

export const ProductPage = () => {
  const { finalProductList,isProductLoading } = useContext(ProductContext);
  const {isLoggedIn}=useContext(AuthContext);
  const navigate = useNavigate();
  const {
    addToCart,
    addToWishlist,
    inWishlist,
    inCart,
    incrementQuantity,
    removeFromWishlist,
  } = useContext(CartWishlistContext);
  const [isDisabled, setIsDisabled] = useState(false);

  const clickHandler = (cartItem) => {
    setIsDisabled(true); 
    if(isLoggedIn)
    {
    if (!inCart(cartItem._id)) incrementQuantity(cartItem._id);
    else addToCart(cartItem);
    }
    else {
      navigate("/login");
    }
    setTimeout(() => setIsDisabled(false), 300);
  };

  const wishListCLickHandler=(item)=>
  {
    setIsDisabled(true);
    if(isLoggedIn)
    {
    addToWishlist(item)
    }
    else {
      navigate("/login");
    }
    setTimeout(() => setIsDisabled(false), 300);
  }

  return (
    <>
      <NavBar />
      <h1>All Products</h1>
      <div style={{ display: "flex" }}>
        <FilterBar />
        {isProductLoading?<LoadingSpinner />
        :(<div className="product-listing-page">
          <ul className="products">
            {finalProductList?.map((item) => {
              const { _id, title, img, rating, price } = item;
              return (
                <li key={_id}>
                  {inWishlist(_id) ? (
                    <i
                      class="fa-solid fa-heart wishlist"
                      onClick={() => wishListCLickHandler(item)}
                    ></i>
                  ) : (
                    <i
                      class="fa-solid fa-heart-crack wishlist"
                      onClick={() => removeFromWishlist(_id)}
                    ></i>
                  )}
                  <img
                    alt=""
                    src={img}
                    width={200}
                    height={250}
                    onClick={() => navigate(`/products/${_id}`)}
                  />
                  <div className="title-rating-container">
                    <p id="product-title">{title}</p>
                    <p><i class="fa-solid fa-star"></i> {rating}</p>
                  </div>
                  <strong>Rs {price}</strong>
                  {inCart(_id) ? (
                    <button 
                      disabled={isDisabled}
                      className="add-to-cart"
                      onClick={() => clickHandler(item)}
                    >
                      Add to Cart
                    </button>
                  ) : (
                    <button
                      disabled={isDisabled}
                      className="go-to-cart"
                      onClick={() => navigate("/cart")}
                    >
                      Go to Cart
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>)}
      </div>
    </>
  );
};
