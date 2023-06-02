import _ from "lodash";
import React from "react";
import useMediumBanner from "../../../graphql/Main/mediumBanner/useMediumBanner";

const MediumBanner = () => {
  const { mediumBannerData, mediumBannerError, mediumBannerLoading } =
    useMediumBanner();

  return (
    <div className="max-w-7xl mx-auto w-full mt-4">
      <div className="flex sm:space-x-5 max-sm:flex-wrap">
        {_.size(mediumBannerData) > 0 ? (
          mediumBannerData.subBanner1Collection.items[0].banner1Collection.items[0].bannersCollection.items.map(
            (image, index) => (
              <div className="max-sm:my-2" key={index}>
                <img src={image.url} key={index}></img>
              </div>
            )
          )
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MediumBanner;
