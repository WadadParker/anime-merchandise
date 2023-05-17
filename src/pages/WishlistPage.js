import { NavBar } from "../components/NavBar";

export const WishListPage=()=>
{
    return (
        <>
        <NavBar />
        <div>
            <h1>My WishList</h1>
        <ul className="products">
            
            <li>
            <img src="https://comicsense.b-cdn.net/wp-content/uploads/2023/03/trafalgar_hooded_tee5_comicsense.jpg" width={200} height={250} />
                <p>Men Premium Jacket</p>
                <strong>Rs 200</strong>
                <button className="go-to-cart">Go to Cart</button>
                <button className="add-to-cart">Remove from WishList</button>
            </li>
            <li>
                <img src="https://comicsense.b-cdn.net/wp-content/uploads/2021/09/itadori_cosplay_hoodief_comicsense.jpg" width={200} height={250}/>
                    <p>Women Premium Jacket</p>
                    <strong>Rs 200</strong>
                    <button className="go-to-cart">Go to Cart</button>
                    <button className="add-to-cart">Remove from Cart</button>
            </li>
        </ul>    
        </div>

        </>
    )
}