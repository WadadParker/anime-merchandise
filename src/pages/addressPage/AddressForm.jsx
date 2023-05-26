import "./AddressPage.css"
import { useContext } from "react";

import Modal from "react-modal";
import { AddressContext } from "./AddressContext";

const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      width: "auto",
    },
  };

export const AddressForm = () => {
  const {state,dispatch,checkEmptyInputFields,modalOpen, setModalOpen}=useContext(AddressContext);
  const {address:{name,number,pincode,fullAddress,city,altphno,chooseState}}=state;

  return (
    <>
      <Modal isOpen={modalOpen} style={customStyles}>
        <div className="form">
          <div className="form-element">
            <input placeholder="name" value={name} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"name"})}></input>
            <input type="number" placeholder="mobile no." value={number} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"number"})}></input>
          </div>
          <div className="form-element">
            <input type="number" placeholder="pincode" value={pincode} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"pincode"})}></input>
            <input placeholder="city" value={city} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"city"})}></input>
          </div>
          <textarea placeholder="address" value={fullAddress} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"fullAddress"})}></textarea>
          <div className="form-element">
            <input placeholder="alternate ph (optional)" value={altphno} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"altphno"})}></input>
            <select class="form-input-field" name="state" required="" value={chooseState} onChange={(e)=>dispatch({type:"UPDATE_INPUT_FIELD",payload:e.target.value,input:"chooseState"})}>
              <option value="" disabled="">
                choose state
              </option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
            </select>
          </div>
          <div className="form-element buttons-container">
            <button className="add" onClick={checkEmptyInputFields}>Add</button>
            <button className="next" onClick={()=>dispatch({type:"RESET_ADDRESS"})}>Reset</button>
            <button className="next" onClick={()=>dispatch({type:"RANDOM_ADDRESS"})}>Random Data</button>
            <button className="cancel" onClick={() => {setModalOpen(false);dispatch({type:"RESET_ADDRESS"})}}>Cancel</button>
          </div>
        </div>
      </Modal>
    </>
  );
};
