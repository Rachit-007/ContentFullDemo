import _ from "lodash";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useGetFeautredProduct from "../../../graphql/Main/featuredProduct/useGetFeautredProduct";
import ProductCard from "./ProductCard";
import "swiper/css";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import "../../../assets/css/swiperBtn.css"; 

const FeaturedProduct = () => {
  const { featuredProductData, featuredProductError, featuredProductLoading } =
    useGetFeautredProduct();

  if (featuredProductData) {
    console.log();
  }

  return (
    <>
      <h1 className="text-center my-8 text-3xl font-semibold">
        Featured Product
      </h1>
      <div className="flex max-w-7xl mx-auto w-full my-5">
        {_.size(featuredProductData) > 0 ? (
          <Swiper slidesPerView={6} navigation={true} modules={[Navigation]}>
            {featuredProductData.singlePhotoCollection.items[0].featuredProductCollection.items.map(
              (product) => (
                <SwiperSlide>
                  <ProductCard product={product} />
                </SwiperSlide>
              )
            )}
          </Swiper>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default FeaturedProduct;
