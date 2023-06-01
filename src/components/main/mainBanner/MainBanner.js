import _ from "lodash";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import useMainBanner from "../../../graphql/Main/mainBanner/useMainBanner";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const MainBanner = () => {
  const { bannerData, bannerError, BannerLoading } = useMainBanner();

  return (
    <div className="max-w-7xl mx-auto w-full">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        autoplay={true}
        loop={true}
      >
        {_.size(bannerData) > 0 ? (
          bannerData.mainBannersCollection.items[0].bannerCollection.items.map(
            (image) => (
              <SwiperSlide>
                <img src={image.url} />
              </SwiperSlide>
            )
          )
        ) : (
          <></>
        )}
      </Swiper>
    </div>
  );
};

export default MainBanner;
