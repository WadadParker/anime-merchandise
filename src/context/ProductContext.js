import {  useEffect, createContext, useReducer } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const productReducer = (product, { type, payload, input }) => {
    switch (type) {
      case "INITIAL_VALUE":
        return { ...product, productList: payload,isProductLoading:false };

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
        if(input)
        return { ...product, sort: payload, lowSortCheck:true,highSortCheck:false };
        else
        return { ...product, sort: payload, lowSortCheck:false,highSortCheck:true };  

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
          lowSortCheck:false,
          highSortCheck:false,
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
    lowSortCheck:false,
    highSortCheck:false,
    productList: [],
    isProductLoading:true,
  };

  const [state, dispatch] = useReducer(productReducer, initialState);
  const { productList, search, slider, categoryCheck, sort,isProductLoading } = state;
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

  const searchedProducts = productList.filter(({ title }) =>
    title.toLowerCase().includes(search.toLowerCase())
  );

  const filteredByRating = productList.filter(({ rating }) => rating >= slider);

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
    if (sortOrder === "lowSort") {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "highSort") {
      return [...products].sort((a, b) => b.price - a.price);
    } else {
      return products;
    }
  };

  const filteredByCategory = filterByCategory(categoryCheck, filteredByRating);

  const finalProductList = sortProducts(sort, filteredByCategory);

  return (
    <ProductContext.Provider
      value={{ state, dispatch, searchedProducts, finalProductList,isProductLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
};
