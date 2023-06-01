import { useContext } from "react";

import { ProductContext } from "../..";
import "./FilterBar.css";

export const FilterBar=()=>
{
    const {state,dispatch}=useContext(ProductContext);
    const {categoryCheck:{oversize,winterWear,figurine,stickers}}=state;
    const {slider}=state;

    const changeHandler=(event)=>
    {   
        dispatch({type:"CATEGORY_CHECK",payload:event})
    }

    return (
        <div className="filter-container">
            <header>
                <strong>Filters</strong>
                <u style={{cursor:"pointer"}} onClick={()=>dispatch({type:"CLEAR_FILTERS"})}>Clear</u>
            </header>
            <strong>Rating</strong>
            <input type="range" min={0} max={5} value={slider} onChange={(e)=>dispatch({type:"SLIDER",payload:e.target.value})}></input>

            <strong>Category</strong>
            <div className="category-container" style={{margin:"1rem 0"}}>
                <input type="checkbox" checked={oversize} onChange={(e)=>changeHandler(e.target.value)} value="oversize"/>
                <label>Oversized Tees</label>
                <br/>
                <input type="checkbox" checked={winterWear} onChange={(e)=>changeHandler(e.target.value)} value="winterWear"/>
                <label>Winter Wear</label>
                <br/>
                <input type="checkbox" checked={figurine} onChange={(e)=>changeHandler(e.target.value)} value="figurine"/>
                <label>Figurines</label>
                <br />
                <input type="checkbox" checked={stickers} onChange={(e)=>changeHandler(e.target.value)} value="stickers"/>
                <label>Stickers</label>
            </div>

            <strong>Price</strong>
            <div className="sort-container">
                <input type="radio" name="sort" onChange={()=>dispatch({type:"SORT",payload:"highSort"})}/>
                <label for="sort">Sort High to Low</label>
                <br/>
                <input type="radio" name="sort" onChange={()=>dispatch({type:"SORT",payload:"lowSort"})}/>
                <label for="sort">Sort Low to High</label>
            </div>


        </div>
    )
}