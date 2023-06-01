import { useQuery } from "@apollo/client";
import { GET_MAIN_BANNER } from "./mainBannersQuery";

const useMainBanner = () => {
  const {
    data: bannerData,
    error: bannerError,
    loading: BannerLoading,
  } = useQuery(GET_MAIN_BANNER);

  return { bannerData, bannerError, BannerLoading };
};

export default useMainBanner;
