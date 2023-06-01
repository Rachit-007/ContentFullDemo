import _ from "lodash";
import React from "react";
import useGetCategories from "../../../graphql/Main/shopByCategories/useGetCategories";
import Category from "./Category";

const ShopByCategories = () => {
  const { categories, categoriesError, categoriesLoading } = useGetCategories();

  // console.log("printed");
  if (categories) {
    console.log(categories);
    console.log(
      categories.singlePhotoCollection.items[0].shopByCategoryCollection.items
    );
  }

  return (
    <>
      <h1 className="text-center my-8 text-3xl font-semibold">
        Shop By Categories
      </h1>
      <div className="flex max-w-7xl mx-auto w-full my-5">
        {categories &&
          categories.singlePhotoCollection.items[0].shopByCategoryCollection.items.map(
            (item) => <Category item={item} />
          )}
      </div>
    </>
  );
};

export default ShopByCategories;
