import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productdata, setproductdata] = useState([]);
  const [sortedData, setsortedData] = useState([]);
  const [productdatabyid, setproductdatabyid] = useState([]);

  const [limit, setLimit] = useState(100);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isFilteredLoading, setIsFilteredLoading] = useState(false);
  const [isLoadingById, setIsLoadingById] = useState(false);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get('https://furniture-api.fly.dev/v1/products?limit=100');
      setproductdata(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchProductbyid = async (id) => {
    setIsLoadingById(true);
    try {
      const res = await axios.get(`https://furniture-api.fly.dev/v1/products/${id}`);
      setproductdatabyid(res.data.data);
      console.log(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoadingById(false);
    }
  };

  const fetchFilteredProducts = async (
    newLimit = limit,
    newSort = sort,
    newCategory = category
  ) => {
    setIsFilteredLoading(true);
    let url = `https://furniture-api.fly.dev/v1/products?limit=${newLimit}`;
    if (newSort) url += `&sort=${newSort}`;
    if (newCategory) url += `&category=${newCategory}`;

    try {
      const res = await axios.get(url);
      setsortedData(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFilteredLoading(false);
    }
  };

  const updateLimit = (value) => {
    setLimit(value);
    fetchFilteredProducts(value, sort, category);
  };

  const updateSort = (value) => {
    setSort(value);
    fetchFilteredProducts(limit, value, category);
  };

  const updateCategory = (value) => {
    setCategory(value);
    fetchFilteredProducts(limit, sort, value);
  };

  useEffect(() => {
    fetchProduct();
    fetchFilteredProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productdata,
        sortedData,
        updateLimit,
        updateSort,
        updateCategory,
        category,
        limit,
        fetchProductbyid,
        productdatabyid,
        isLoading,
        isFilteredLoading,
        isLoadingById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
