import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { NavBar } from "../../components/navbar/NavBar";
import { ProductContext } from "../../context/ProductContext";

import "./Home.css";

export const Home=()=>
{
    const navigate=useNavigate();
    const {dispatch}=useContext(ProductContext);
    return (
        <>
        
        <div className="home-container">
        <div className="home">
        <NavBar />
            <h1>Find your fav anime merch</h1>
            <div className="home-header">
                <img alt="" src="https://9tailedkitsune.com/wp-content/uploads/2022/06/anyacuteaf-1024x576.jpg" width={1024} height={576} />
                <button onClick={()=>navigate("/products")}>Explore Merch</button>
                </div>
                <h1>Categories</h1>
            <div className="category-container">
                <div className="image-container">
                    <div className="image-element-container">
                    <img alt="" src="https://comicsense.b-cdn.net/wp-content/uploads/2022/12/fig-1_comicsense.jpg" width={350} height={250} onClick={()=>{dispatch({ type: "CATEGORY_CHECK", payload: "figurine" });navigate("/products")}}/>
                    </div>
                    <div className="image-element-container">
                    <img alt="" src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/oversize_comicsense.jpg" width={350} height={250} onClick={()=>{dispatch({ type: "CATEGORY_CHECK", payload: "oversize" });navigate("/products")}}/>
                    </div>
                </div>
                <div className="image-container">
                    <div className="image-element-container">
                    <img alt="" src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/stickers1_comicsense.jpg" width={350} height={250} onClick={()=>{dispatch({ type: "CATEGORY_CHECK", payload: "stickers" });navigate("/products")}}/>
                    </div>
                    <div className="image-element-container">
                    <img alt="" src="https://comicsense.b-cdn.net/wp-content/uploads/2022/08/winterwear_comicsense.jpg" width={350} height={250} onClick={()=>{dispatch({ type: "CATEGORY_CHECK", payload: "winterWear" });navigate("/products")}}/>
                    </div>
                </div>
            </div>

            </div>
        </div>
        
        </>
    )
}