import {NavBar} from "../components/NavBar"
import { FilterBar } from "../components/FilterBar"

export const ProductPage=()=>
{
    return (
            <><NavBar />
        <div style={{display:"flex"}}>
            
            <FilterBar />
            <div className="product-listing-page">
                <h1>All Products</h1>
                <ul className="products">
                    <li>
                        <img src="https://comicsense.b-cdn.net/wp-content/uploads/2023/05/tokyorevengers_blackdragon_fullsleevetee_listing3_hitanshi-800x1067.jpg" width={200} height={250}/>
                        <p>Men Premium Jacket</p>
                        <strong>Rs 200</strong>
                        <button className="go-to-cart">Go to Cart</button>
                        <button className="add-to-cart">Add t0 Cart</button>
                    </li>
                    <li>
                    <img src="https://comicsense.b-cdn.net/wp-content/uploads/2022/01/walhalla_plain_back_comicsense.jpg" width={200} height={250}/>
                        <p>Women Premium Jacket</p>
                        <strong>Rs 200</strong>
                        <button className="go-to-cart">Go to Cart</button>
                        <button className="add-to-cart">Add to Cart</button>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}