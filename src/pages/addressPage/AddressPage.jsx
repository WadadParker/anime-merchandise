import "./AddressPage.css"
import { useContext } from "react";

import { CartWishlistContext } from "../../context/CartWishlistContext";
import { AddressContext } from "./AddressContext";
import { NavBar } from "../../components/NavBar";
import { AddressForm } from "./AddressForm";


export const AddressPage = () => {

    const {cartList,totalPrice}=useContext(CartWishlistContext);
    const {state,setModalOpen,dispatch}=useContext(AddressContext);
    const {addressList}=state;

  return (
    <>
      <NavBar />
      <h1>Checkout Page</h1>
      <AddressForm />      
      <div className="cart-container">
        <div className="address-container">
        <h2 style={{marginLeft:"3rem"}}>Address Details</h2>
        <ul className="address-list">
          {addressList?.map((item,index)=>{
            const {name,number,pincode,fullAddress,city,altphno,chooseState}=item;
            return(
              <li key={index} className="address-list-item">
                <input type="radio" name="address" className="input-address" onChange={()=>dispatch({type:"SELECT_ADDRESS",payload:item})}></input>
                <main>
                  <h1>{name}</h1>
                  <p>{fullAddress} {city} {chooseState}</p>
                  <span>Pin: {pincode}</span>
                  <p><b>Mobile: </b> {number}</p>
                </main>
                <i class="fa-solid fa-pen-to-square address-edit" onClick={()=>{dispatch({type:"EDIT_ADDRESS",payload:item});setModalOpen(true)}}></i>
              </li>
            )})}
            <li className="add-new-address">
              <button onClick={()=>setModalOpen(true)}><i class="fa-solid fa-plus" style={{fontSize:"1.4rem",color:"white"}}></i></button>
              <p>Add new address</p>
            </li>
        </ul>
        </div>
      <div className="bill-container">
            <strong style={{fontSize:"1.5rem"}}>Billing Information</strong>
            {cartList?.map((item)=>{
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
            <button>Checkout</button>
        </div>
        </div>
    </>
  );
};