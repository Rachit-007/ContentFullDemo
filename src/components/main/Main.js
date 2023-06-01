import React from "react";
import ShopByCategories from "./categories/ShopByCategories";
import FeaturedProduct from "./featuredProduct/FeaturedProduct";
import MainBanner from "./mainBanner/MainBanner";
import MediumBanner from "./mediumBanner/MediumBanner";
import SmallBanner from "./smallBanner/SmallBanner";


const Main = () => {
  return (
    <>
      <MainBanner />
      <MediumBanner />
      <ShopByCategories />
      <SmallBanner />
      <FeaturedProduct />
    </>
  );
};

export default Main;
