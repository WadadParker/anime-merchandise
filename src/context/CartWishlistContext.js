import { createContext, useReducer, useEffect } from "react";
import axios from "axios";

import {toast } from 'react-toastify';
export const CartWishlistContext=createContext();

export const CartWishlistProvider=({children})=>
{
    const encodedToken=localStorage.getItem("token");
    console.log(encodedToken);
    const cartAndWishlistreducer=(list,{type,payload})=>
    {
        switch(type)
        {
            case "CART":
                return {...list,cartList:payload};
            
            case "WISHLIST":
                return {...list,wishList:payload};    
        }
    }

    const initialState={
        cartList:[],
        wishList:[],
    }
    const [state,dispatch]=useReducer(cartAndWishlistreducer,initialState);
    
    const getCart=async ()=>
    {
        try {
            
            const response=await axios.get("/api/user/cart",{headers:{authorization:encodedToken}});
            if(response.status===200)
            {
                dispatch({type:"CART",payload:response.data.cart});
            }
        }
        catch(error)
        {
            console.log(error);
        }
    }

  useEffect(()=>getCart(),[]);
    
    const addToCart=async (item)=>
  {
    try{
        const response=await axios.post("/api/user/cart",{product:item},{headers:{authorization:encodedToken}});
        if(response.status===201)
        {
            dispatch({type:"CART",payload:response.data.cart});
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
    }
    catch(error){
        console.log(error);
    }
  }

  const incrementQuantity=async(id)=>
  {
    try{
        const response=await axios.post(`/api/user/cart/${id}`,{"action":{"type":"increment"}},{headers:{authorization:encodedToken}})
        if(response.status===200)
        {
            dispatch({type:"CART",payload:response.data.cart});
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
    }
    catch(error)
    {
        console.log(error)
    }
  }

  const decrementQuantity=async(id)=>
  {
    try{
        const response=await axios.post(`/api/user/cart/${id}`,{"action":{"type":"decrement"}},{headers:{authorization:encodedToken}})
        if(response.status===200)
        {
            dispatch({type:"CART",payload:response.data.cart});
            toast.warn('Quantity decreased!', {
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
    }
    catch(error)
    {
        console.log(error)
    }
  }

  const deleteFromCart=async(id)=>
  {
    try{
        console.log("This is coming",id)
        const response=await axios.delete(`/api/user/cart/${id}`,{headers:{authorization:encodedToken}},{});
        if(response.status===200)
        {
            dispatch({type:"CART",payload:response.data.cart});
            toast.error('Removed from Cart', {
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
    }
    catch(error)
    {
        console.log(error)
    }
  }
const totalPrice = [...state.cartList].reduce((acc,{price,qty})=>acc + (Number(price)*qty),0);

const addToWishlist=async(item)=>
{
    try{
        const response=await axios.post("/api/user/wishlist",{product:item},{headers:{authorization:encodedToken}});
        if(response.status===201)
        {
            dispatch({type:"WISHLIST",payload:response.data.wishlist})
        }
    }
    catch(error)
    {
        console.log(error);
    }
}




    return (
        <CartWishlistContext.Provider value={{state,addToCart,incrementQuantity,decrementQuantity, deleteFromCart, totalPrice}}>
            {children}
        </CartWishlistContext.Provider>
    )
}
