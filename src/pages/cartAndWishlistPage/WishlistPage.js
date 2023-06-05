import { useContext } from "react";

import { CartWishlistContext } from "../../context/CartWishlistContext";
import { NavBar } from "../../components/navbar/NavBar";
import { EmptyCart } from "../../components/EmptyCart";

import "./CartAndWishlistPage.css";

export const WishListPage = () => {
  const { state, inCart, addToCart, removeFromWishlist, incrementQuantity } =
    useContext(CartWishlistContext);
  const { wishlist } = state;

  const clickHandler = (id, cartItem) => {
    if (inCart(id)) {
      addToCart(cartItem);
    } else {
      incrementQuantity(id);
    }
  };
  return (
    <>
      <NavBar />
      <div>
        <h1>My WishList({wishlist.length})</h1>
        {wishlist.length===0?<EmptyCart />
        :(<ul className="products">
          {wishlist?.map((item) => {
            const { _id, title, img, price } = item;
            return (
              <li key={_id}>
                <img alt="" src={img} width={200} height={250} />
                <p>{title}</p>
                <strong>Rs {price}</strong>
                <button
                  className="add-to-cart"
                  onClick={() => clickHandler(_id, item)}
                >
                  {inCart(_id)?"Add to Cart":"Add to Cart +"}
                </button>
                <button
                  className="remove-from-wishlist"
                  onClick={() => removeFromWishlist(_id)}
                >
                  Remove from Wishlist
                </button>
              </li>
            );
          })}
        </ul>)}
      </div>
    </>
  );
};
