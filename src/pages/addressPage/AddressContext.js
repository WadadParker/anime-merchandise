import { createContext, useReducer, useState } from "react"
import { toast } from "react-toastify";

export const AddressContext=createContext();

export const AddressProvider=({children})=>
{
    const addressReducer=(item,{type,payload,input,index})=>
    {
        const {address,addressList,addressIndex}=item;
        switch(type)
        {
            case "UPDATE_INPUT_FIELD":
                return {...item,address:{...item.address,[input]:payload}}
            
            case "ADD_ADDRESS":
                return {...item,addressList:[...item.addressList,item.address]}
                
            case "RANDOM_ADDRESS":
                return {...item,address:item.randomAddress}   

            case "RESET_ADDRESS":
                return {...item,address:item.resetAddress}   

            case "SELECT_ADDRESS":
                return {...item,selectedAddressIndex:index}     
                
            case "EDIT_ADDRESS":
                return {...item,address:payload,editAddress:true,addressIndex:index}  
            
            case "UPDATE_ADDRESS":
                const updatedAddresList=addressList.map((item,i)=>{
                    if(i==addressIndex)
                    {
                        return address;
                    }
                    else {
                        return item;
                    }
                })
                return {...item,addressList:updatedAddresList,editAddress:false}
            
            case "DELETE_ADDRESS":
                const deletedAddresslist=addressList.filter((item,i)=>i!==index)  
                return {...item,addressList:deletedAddresslist}  


            default:
                return item;    
        }
    }

    const initialState={
        address:{name:"",number:"",pincode:"",city:"",fullAddress:"",altphno:"",chooseState:""},
        addressList:[],
        randomAddress:{name:"Zoro",number:"9896563697",pincode:"106601",city:"Alabasta",fullAddress:"Kaminari no kokyun, ichi no kata, hekiriki isse",altphno:"7776668880",chooseState:"new world"},
        resetAddress:{name:"",number:"",pincode:"",city:"",fullAddress:"",altphno:"",chooseState:""},
        selectedAddressIndex:"",
        editAddress:false,
        addressIndex:"",
    }
    const [state,dispatch]=useReducer(addressReducer,initialState);
    const [modalOpen, setModalOpen] = useState(false);

    const checkEmptyInputFields=()=>
    {
        const {address:{name,number,pincode,fullAddress,city,altphno,chooseState},editAddress}=state;
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
        else if(editAddress)
            {
                dispatch({type:"UPDATE_ADDRESS"})
                dispatch({type:"RESET_ADDRESS"})
                setModalOpen(false);
                toast.success("Address Updated",{
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