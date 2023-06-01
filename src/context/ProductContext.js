import { useState, useEffect, createContext, useReducer } from "react";
import axios from "axios";

// import {products} from "../backend/db/products";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productReducer = (product, { type, payload }) => {
    switch (type) {
      case "INITIAL_VALUE":
        return { ...product, productList: payload };

      case "SLIDER":
        return { ...product, slider: payload };

      case "SEARCH":
        return { ...product, search: payload };

      case "CATEGORY_CHECK":
        const { categoryCheck } = product;
        return {
          ...product,
          categoryCheck: {
            ...categoryCheck,
            [payload]: !categoryCheck[payload],
          },
        };

      case "SORT":
        return { ...product, sort: payload };

      case "CLEAR_FILTERS":
        return {
          ...product,
          slider: 0,
          categoryCheck: {
            oversize: false,
            winterWear: false,
            figurine: false,
            stickers: false,
          },
          sort: "",
        };

      default:
        return product;
    }
  };

  const initialState = {
    slider: 0,
    search: "",
    categoryCheck: {
      oversize: false,
      winterWear: false,
      figurine: false,
      stickers: false,
    },
    sort: "",
    productList: [],
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getData = async () => {
    try {
      const response = await axios.get("/api/products");
      if (response.status === 200)
        dispatch({ type: "INITIAL_VALUE", payload: response.data.products });
    } catch (error) {
      console.log(error, "This is error");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // Add below code to utils

  const { slider, search, categoryCheck, sort, productList } = state;

  const searchedProducts = productList.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredByRating = searchedProducts.filter(
    ({ rating }) => rating >= slider
  );

  const filterByCategory = (category, products) => {
    let filteredList = [];
    const categories = Object.keys(category);
    const values = Object.values(category);
    values.map((currentValue, index) => {
      if (currentValue) {
        let newList = products.filter(
          ({ categoryName }) => categoryName === categories[index]
        );
        filteredList = filteredList.concat(newList);
      }
    });
    if (filteredList.length === 0) return products;
    else return filteredList;
  };

  const sortProducts = (sortOrder, products) => {
    if (sortOrder === "highSort") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "lowSort") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const filteredByCategory = filterByCategory(categoryCheck, filteredByRating);

  const finalProductList = sortProducts(sort, filteredByCategory);

  return (
    <ProductContext.Provider value={{ state, dispatch, finalProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
