import { useQuery } from "@apollo/client";
import { GET_CATEGORY } from "./getCategories";

const useGetCategories = () => {
  const {
    data: categories,
    error: categoriesError,
    loading: categoriesLoading,
  } = useQuery(GET_CATEGORY);

    return {
        categories,
        categoriesError,
        categoriesLoading,
    };
};

export default useGetCategories;
