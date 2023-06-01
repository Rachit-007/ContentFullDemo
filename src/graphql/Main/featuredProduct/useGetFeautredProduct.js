import { useQuery } from "@apollo/client";
import React from "react";
import { GET_FEATURED_PRODUCT } from "./featuredProductQuery";

const useGetFeautredProduct = () => {
  const {
    data: featuredProductData,
    loading: featuredProductLoading,
    error: featuredProductError,
  } = useQuery(GET_FEATURED_PRODUCT);

  return {
    featuredProductData,
    featuredProductError,
    featuredProductLoading,
  };
};

export default useGetFeautredProduct;
