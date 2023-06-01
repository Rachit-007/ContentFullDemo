import { useQuery } from "@apollo/client";
import { GET_MEDIUM_BANNER } from "./mediumBannerQuery";

const useMediumBanner = () => {
  const {
    data: mediumBannerData,
    error: mediumBannerError,
    loading: mediumBannerLoading,
  } = useQuery(GET_MEDIUM_BANNER);

  return {
    mediumBannerData,
    mediumBannerError,
    mediumBannerLoading,
  };
};

export default useMediumBanner;
