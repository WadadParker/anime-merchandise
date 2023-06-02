import { createContext, useReducer, useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
export const CartWishlistContext = createContext();

export const CartWishlistProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  const encodedToken = localStorage.getItem("token");
  console.log(encodedToken);
  const cartAndWishlistreducer = (list, { type, payload }) => {
    switch (type) {
      case "CART":
        setIsLoading(false);
        return { ...list, cartList: payload };

      case "WISHLIST":
        setIsLoading(false);
        return { ...list, wishlist: payload };
    }
  };

  const initialState = {
    cartList: [],
    wishlist: [],
  };
  const [state, dispatch] = useReducer(cartAndWishlistreducer, initialState);
  const { cartList } = state;

  const getCart = async () => {
    const encodedToken = localStorage.getItem("token");
    try {
      if (encodedToken !== "") {
        const response = await axios.get("/api/user/cart", {
          headers: { authorization: encodedToken },
        });
        if (response.status === 200) {
          dispatch({ type: "CART", payload: response.data.cart });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => getCart(), []);

  const addToCart = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/cart",
        { product: item },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        dispatch({ type: "CART", payload: response.data.cart });
        toast.success(`${item.title} added to Cart`, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const incrementQuantity = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "increment" } },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200) {
        dispatch({ type: "CART", payload: response.data.cart });
        toast.success(`Quantity increased`, {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const decrementQuantity = async (id) => {
    try {
      const response = await axios.post(
        `/api/user/cart/${id}`,
        { action: { type: "decrement" } },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 200) {
        dispatch({ type: "CART", payload: response.data.cart });
        toast.warn("Quantity decreased!", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteFromCart = async (id) => {
    try {
      console.log("This is coming", id);
      const response = await axios.delete(
        `/api/user/cart/${id}`,
        { headers: { authorization: encodedToken } },
        {}
      );
      if (response.status === 200) {
        dispatch({ type: "CART", payload: response.data.cart });
        toast.error("Removed from Cart", {
          position: "top-left",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const totalPrice = [...state.cartList].reduce(
    (acc, { price, qty }) => acc + Number(price) * qty,
    0
  );

  const addToWishlist = async (item) => {
    try {
      const response = await axios.post(
        "/api/user/wishlist",
        { product: item },
        { headers: { authorization: encodedToken } }
      );
      if (response.status === 201) {
        dispatch({ type: "WISHLIST", payload: response.data.wishlist });
        toast.success(`${item.title} added to WishList`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const removeFromWishlist = async (id) => {
    try {
      const response = await axios.delete(`/api/user/wishlist/${id}`, {
        headers: { authorization: encodedToken },
      });
      if (response.status === 200) {
        dispatch({ type: "WISHLIST", payload: response.data.wishlist });
        toast.error(`Removed from wishlist`, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inWishlist = (id) => {
    const foundItem = [...state.wishlist].find(({ _id }) => _id == id);
    if (foundItem === undefined) return true;
    else return false;
  };
  const inCart = (id) => {
    const foundCartItem = [...state.cartList].find(({ _id }) => _id == id);
    if (foundCartItem === undefined) return true;
    else return false;
  };
  const logoutHandler = (setIsLoggedIn) => {
    setIsLoggedIn(false);
    localStorage.setItem("user", "");
    localStorage.setItem("token", "");
    toast.warn("Logged Out", {
      position: "top-left",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch({ type: "CART", payload: [] });
  };
  return (
    <CartWishlistContext.Provider
      value={{
        state,
        cartList,
        getCart,
        addToCart,
        incrementQuantity,
        decrementQuantity,
        deleteFromCart,
        totalPrice,
        addToWishlist,
        inWishlist,
        inCart,
        removeFromWishlist,
        logoutHandler,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </CartWishlistContext.Provider>
  );
};
