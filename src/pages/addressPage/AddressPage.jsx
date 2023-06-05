import "./AddressPage.css";
import { useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

import { CartWishlistContext } from "../../context/CartWishlistContext";
import { AddressContext } from "./AddressContext";
import { NavBar } from "../../components/navbar/NavBar";
import { AddressForm } from "./AddressForm";

export const AddressPage = () => {
  const { cartList, totalPrice } = useContext(CartWishlistContext);
  const { state, setModalOpen, dispatch } = useContext(AddressContext);
  const { addressList, selectedAddressIndex } = state;
  const selectedAddress = addressList[selectedAddressIndex];
  const navigate=useNavigate();

  const checkoutHandler=()=>
  {
    if(selectedAddress===""||selectedAddress===undefined)
    {
        toast.warn('Please select an address', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            })
    }
    else {
        var option={
            key:"rzp_test_gZUyFL8iSOmzRO",
            key_secret:"NhxYofCc6J74MYtxV4N736G8",
            amount:Number(totalPrice) * 100,
            currency:'INR',
            name:"AnimeCon_Hubli",
            description:"Checkout for Merch",
            handler:function(response){
              toast.success("Payment successful",{
                position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
            navigate("/order");
            },
            prefill:{
              name:"Wadad",
              email:"wadadparker@gmail.com",
              contact: "9320003121",

            },
            notes:{
              address:"Razorpay Corporate Office"
            },
            theme:{
              color:"#3399cc",
            },
        };
        var pay=new window.Razorpay(option);
        pay.open();
    }
  }
  return (
    <>
      <NavBar />
      <h1>Checkout Page</h1>
      <AddressForm />
      <div className="cart-container">
        <div className="address-container">
          <h2 style={{ marginLeft: "3rem" }}>Address Details</h2>
          <ul className="address-list">
            {addressList?.map((item, addressIndex) => {
              const {
                name,
                number,
                pincode,
                fullAddress,
                city,
                altphno,
                chooseState,
              } = item;
              return (
                <li key={addressIndex} className="address-list-item">
                  <input
                    type="radio"
                    name="address"
                    className="input-address"
                    onChange={() =>
                      dispatch({ type: "SELECT_ADDRESS", index: addressIndex })
                    }
                  ></input>
                  <main>
                    <h1>{name}</h1>
                    <p>
                      {fullAddress} {city} {chooseState}
                    </p>
                    <span>Pin: {pincode}</span>
                    <p>
                      <b>Mobile: </b> {number}
                    </p>
                  </main>
                  <i
                    class="fa-solid fa-pen-to-square address-edit"
                    onClick={() => {
                      dispatch({
                        type: "EDIT_ADDRESS",
                        payload: item,
                        index: addressIndex,
                      });
                      setModalOpen(true);
                    }}
                  ></i>
                </li>
              );
            })}
            <li className="add-new-address">
              <button onClick={() => setModalOpen(true)}>
                <i
                  class="fa-solid fa-plus"
                  style={{ fontSize: "1.4rem", color: "white" }}
                ></i>
              </button>
              <p>Add new address</p>
            </li>
          </ul>
        </div>
        <div className="bill-container address">
          <strong style={{ fontSize: "1.5rem" }}>Billing Information</strong>
          {cartList?.map((item) => {
            const { _id, title, price, qty } = item;
            return (
              <li className="bill-item" key={_id}>
                <p style={{ flexGrow: "1" }}>
                  {title} <b>x {qty}</b>
                </p>
                <p>
                  <b>{price * qty}</b>
                </p>
              </li>
            );
          })}

          <span>
            <hr />
          </span>
          <li className="bill-item">
            <p style={{ flexGrow: "1" }}>Total Price</p>
            <p>
              <b>{totalPrice}</b>
            </p>
          </li>
          {selectedAddress && (
            <>
              <strong>{selectedAddress?.name}</strong>
              <p>
                {selectedAddress?.fullAddress} {selectedAddress?.city}{" "}
                {selectedAddress?.chooseState}
              </p>
              <span>Pin: {selectedAddress?.pincode}</span>
              <p>
                <b>Mobile: </b> {selectedAddress?.number}
              </p>
            </>
          )}
          <button onClick={checkoutHandler}>Checkout</button>
        </div>
      </div>
    </>
  );
};
