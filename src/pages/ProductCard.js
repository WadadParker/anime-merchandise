import { NavBar } from "../components/navbar/NavBar"

export const ProductCard=()=>
{
    return (<>
    <NavBar />
    <div style={{display:"flex",justifyContent:"center"}}>
        <div className="product-card-container">
        <img src="https://comicsense.b-cdn.net/wp-content/uploads/2021/09/itadori_cosplay_hoodief_comicsense.jpg"/>
        <div className="product-details-container">
            <p>Itadori Hoodie</p>
            <strong className="price-with-flex-grow">Rs. 2000</strong>
            <div className="quantity-container">
                <label>Quantity: </label>
                <button> - </button>
                <span>1</span>
                <button> + </button>
            </div>
            
        </div>
        <div className="button-container">
            <button className="go-to-cart">Go to Cart</button>
            <button className="add-to-cart">Add to Cart</button>
            </div>
        </div>
    </div>    
        </>
    )
}