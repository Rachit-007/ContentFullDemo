import _ from "lodash";
import useSmallBanner from "../../../graphql/Main/smallBanner/useSmallBanner";

const SmallBanner = () => {
  const { smallBannerData, smallBannerError, smallBannerLoading } =
    useSmallBanner();

  return (
    <>
      <div className="max-w-7xl mx-auto w-full mt-4 flex max-sm:flex-wrap">
        {_.size(smallBannerData) > 0 ? (
          smallBannerData.subBanner1Collection.items[0].banner2Collection.items[0].bannersCollection.items.map(
            (image, index) => (
              <div className="px-2.5 max-sm:pt-5" key={index}>
                <img src={image.url} key={index}></img>
              </div>
            )
          )
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default SmallBanner;
