import { createContext, useReducer, useState } from "react"
import { toast } from "react-toastify";

export const AddressContext=createContext();

export const AddressProvider=({children})=>
{
    const addressReducer=(item,{type,payload,input})=>
    {
        switch(type)
        {
            case "UPDATE_INPUT_FIELD":
                console.log(input,payload,"kokokok");
                return {...item,address:{...item.address,[input]:payload}}
            
            case "ADD_ADDRESS":
                return {...item,addressList:[...item.addressList,item.address]}
                
            case "RANDOM_ADDRESS":
                return {...item,address:item.randomAddress}   

            case "RESET_ADDRESS":
                return {...item,address:item.resetAddress}   

            case "SELECT_ADDRESS":
                return {...item,selectedAddress:payload}     
                
            case "EDIT_ADDRESS":
                console.log(payload);
                return {...item,address:payload}    
        }
    }

    const initialState={
        address:{name:"",number:"",pincode:"",city:"",fullAddress:"",altphno:"",chooseState:""},
        addressList:[],
        randomAddress:{name:"Zoro",number:"9896563697",pincode:"106601",city:"Alabasta",fullAddress:"Kaminari no kokyun, ichi no kata, hekiriki isse",altphno:"7776668880",chooseState:"new world"},
        resetAddress:{name:"",number:"",pincode:"",city:"",fullAddress:"",altphno:"",chooseState:""},
        selectedAddress:{},
    }
    const [state,dispatch]=useReducer(addressReducer,initialState);
    const [modalOpen, setModalOpen] = useState(false);

    const checkEmptyInputFields=()=>
    {
        const {address:{name,number,pincode,fullAddress,city,altphno,chooseState}}=state;
        if(name==="" || number===""||pincode===""||fullAddress===""||city===""||chooseState==="")

        {toast.warn('Please enter all fields', {
            position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });}
        else {
            dispatch({type:"ADD_ADDRESS"});
            dispatch({type:"RESET_ADDRESS"})
            setModalOpen(false);
            toast.success("Address Added",{
                position: "top-left",
            autoClose: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            })
        }
    }

    return <AddressContext.Provider value={{state,dispatch, checkEmptyInputFields, modalOpen,setModalOpen}}>
        {children}
    </AddressContext.Provider>
}