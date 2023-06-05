import { useContext } from "react";

import { ProductContext } from "../..";
import "./FilterBar.css";

export const FilterBar = () => {
  const { state, dispatch } = useContext(ProductContext);
  const {
    categoryCheck: { oversize, winterWear, figurine, stickers },
  } = state;
  const { slider,lowSortCheck,highSortCheck } = state;

  const changeHandler = (event) => {
    dispatch({ type: "CATEGORY_CHECK", payload: event });
  };

  return (
    <div className="filter-container">
      <header>
        <strong>Filters</strong>
        <u
          style={{ cursor: "pointer" }}
          onClick={() => dispatch({ type: "CLEAR_FILTERS" })}
        >
          Clear
        </u>
      </header>
      <br />
      <strong>Rating</strong>
      <label htmlFor="rating" className="rating-label"><span>1</span><span>5</span></label>
      <input
        id="rating"
        type="range"
        min={0}
        max={5}
        value={slider}
        onChange={(e) => dispatch({ type: "SLIDER", payload: e.target.value })}
      ></input>
      <br />
      <strong>Category</strong>
      <div className="category-container" style={{ margin: "1rem 0" }}>
        <input
          type="checkbox"
          checked={oversize}
          onChange={(e) => changeHandler(e.target.value)}
          value="oversize"
          id="oversize"
        />
        <label htmlFor="oversize">Oversized Tee</label>
        <br />
        <input
          type="checkbox"
          checked={winterWear}
          onChange={(e) => changeHandler(e.target.value)}
          value="winterWear"
          id="winterWear"
        />
        <label htmlFor="winterWear">Winter Wear</label>
        <br />
        <input
          type="checkbox"
          checked={figurine}
          onChange={(e) => changeHandler(e.target.value)}
          value="figurine"
          id="figurine"
        />
        <label htmlFor="figurine">Figurines</label>
        <br />
        <input
          type="checkbox"
          checked={stickers}
          onChange={(e) => changeHandler(e.target.value)}
          value="stickers"
          id="stickers"
        />
        <label htmlFor="stickers">Stickers</label>
      </div>
      <br />
      <strong>Price</strong>
      <div className="sort-container">
        <input
          id="lowSort"
          type="radio"
          checked={lowSortCheck}
          name="sort"
          onChange={() => dispatch({ type: "SORT", payload: "lowSort", input:true })}
        />
        <label htmlFor="lowSort">Sort Low to High</label>
        <br />
        <input
          id="highSort"
          type="radio"
          checked={highSortCheck}
          name="sort"
          onChange={() => dispatch({ type: "SORT", payload: "highSort", input:false })}
        />
        <label htmlFor="highSort">Sort High to Low</label>
      </div>
    </div>
  );
};
