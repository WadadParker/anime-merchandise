import { NavBar } from "../components/NavBar"

export const CartPage=()=>
{
    return (
        <>
        <NavBar />
        <h1>My Cart (0)</h1>
        <div className="cart-container">
        <ul className="cart-list-container">
            <li className="cart-item-container">
                <img src="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/trafalgar_hooded_tee5_comicsense.jpg" width={200} height={200} />
                <div className="cart-item-description">
                <p>Trafalgar Law Tshirt</p>   
                <b style={{flexGrow:"1"}}>Rs 200</b>
                    <div className="quantity-container">
                        <label>Quantity: </label>
                        <button> - </button>
                        <span>1</span>
                        <button> + </button>
                    </div>
                </div>
                <i class="fa-solid fa-trash"></i>
            </li>

            <li className="cart-item-container">
                <img src="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/trafalgar_hooded_tee5_comicsense.jpg" width={200} height={200} />
                <div className="cart-item-description">
                <p>Trafalgar Law Tshirt</p>   
                <b style={{flexGrow:"1"}}>200</b>
                    <div className="quantity-container">
                        <label>Quantity: </label>
                        <button> - </button>
                        <span>1</span>
                        <button> + </button>
                    </div>
                </div>
                <i  class="fa-solid fa-trash" style={{alignSelf:"center"}}></i>
            </li>
            
        </ul>    
        <div className="bill-container">
            <strong style={{fontSize:"1.5rem"}}>Billing Information</strong>
            
            <li className="bill-item">
                <p style={{flexGrow:"1"}}>One Piece Trafalgar Law Hoodie <b>x 1</b></p>
                <p><b>200</b></p>
            </li>
            <li className="bill-item">
                <p style={{flexGrow:"1"}}>One Piece Trafalgar Law Hoodie <b>x 1</b></p>
                <p><b>200</b></p>
            </li>
           <span><hr /></span>
            <li className="bill-item">
                <p style={{flexGrow:"1"}}>Total Price</p>
                <p><b>400</b></p>
            </li>
            <button >Place Order</button>
        </div>
    </div>
    </>
    )
}