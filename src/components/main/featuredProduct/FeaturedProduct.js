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

  return (
    <>
      <h1 className="text-center my-8 text-3xl font-semibold">
        Featured Product
      </h1>
      <div className="flex max-w-7xl mx-auto my-5 justify-center">
        {_.size(featuredProductData) > 0 ? (
          <Swiper
            slidesPerView={2}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
              470: {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              700: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
              875: {
                slidesPerView: 4,
                spaceBetween: 25,
              },

              1100: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1280: {
                slidesPerView: 6,
                spaceBetween: 25,
              },
            }}
          >
            {featuredProductData.singlePhotoCollection.items[0].featuredProductCollection.items.map(
              (product, index) => (
                <SwiperSlide key={index}>
                  <ProductCard product={product} key={index} />
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
