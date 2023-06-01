import { useQuery } from "@apollo/client";
import GET_FOOTER from "./footerQuery";

const useFooter = () => {
  const {
    data: footerData,
    loading: footerLoading,
    error: footerError,
  } = useQuery(GET_FOOTER);

  return {
    footerData,
    footerLoading,
    footerError,
  };
};

export default useFooter;
