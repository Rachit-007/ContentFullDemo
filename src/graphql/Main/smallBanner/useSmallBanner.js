import { useQuery } from "@apollo/client";
import { GET_SMALL_BANNER } from "./smallBannerQuery";

const useSmallBanner = () => {
  const {
    data: smallBannerData,
    error: smallBannerError,
    loading: smallBannerLoading,
  } = useQuery(GET_SMALL_BANNER);

  return {
    smallBannerData,
    smallBannerError,
    smallBannerLoading,
  };
};

export default useSmallBanner;
