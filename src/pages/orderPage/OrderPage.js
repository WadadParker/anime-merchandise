import { useNavigate } from "react-router";
import { NavBar } from "../../components/navbar/NavBar"
import Confetti from 'react-confetti'

import "./OrderPage.css"

export const OrderPage=()=>
{
    const navigat=useNavigate();

   
    return (
        <div>
            <NavBar />
            <div className="order-confirmed-container">
            <h1>Your Order is Placed!</h1>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiBOUU4BgIWeXbfMYDD2Q7SqpKjPgq7spplF0mxd6SZuTxGl4y-QxSBDSsHxY2yNpzlYz1YtlXAsEt2s4W48vVO2YgM4M28XkhqDYD2meQZmScp9mQj-XjMrq9GiEYgdjnr_KSWJVpCX9nFnNqKtFaC5i4xXH7oouXYjODGJMpb6WY14qoSsQ/s1600/Spy%20x%20Family%20-%20Episode%2013%20-%20Anya%20Estella.gif" alt=""></img>
            </div>
            <button onClick={()=>navigat("/products")} className="shop-more">Shop More!</button>
            <Confetti />
            
        
    </div>
    )
}