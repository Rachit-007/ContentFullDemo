import _ from "lodash";
import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";

import useGetCategories from "../../../graphql/Main/shopByCategories/useGetCategories";

import Category from "./Category";

import { Navigation } from "swiper";
import "swiper/css";

const ShopByCategories = () => {
  const { categories, categoriesError, categoriesLoading } = useGetCategories();

  return (
    <>
      <h1 className="text-center my-8 text-3xl font-semibold ">
        Shop By Categories
      </h1>
      <div className="flex max-w-7xl  w-full mx-auto my-5 justify-center">
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
          {categories &&
            categories.singlePhotoCollection.items[0].shopByCategoryCollection.items.map(
              (item, index) => (
                <SwiperSlide key={index}>
                  <Category item={item} key={index} />
                </SwiperSlide>
              )
            )}
        </Swiper>
      </div>
    </>
  );
};

export default ShopByCategories;
