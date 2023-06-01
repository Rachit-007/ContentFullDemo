import _ from "lodash";
import useSmallBanner from "../../../graphql/Main/smallBanner/useSmallBanner";

const SmallBanner = () => {
  const { smallBannerData, smallBannerError, smallBannerLoading } =
    useSmallBanner();

  if (smallBannerData) {
    console.log(
      smallBannerData.subBanner1Collection.items[0].banner2Collection.items[0]
        .bannersCollection.items
    );
  }
  return (
    <>
      <div className="max-w-7xl mx-auto w-full mt-4 flex">
        {_.size(smallBannerData) > 0 ? (
          smallBannerData.subBanner1Collection.items[0].banner2Collection.items[0].bannersCollection.items.map(
            (image) => (
              <div className="px-2.5">
                <img src={image.url}></img>
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
