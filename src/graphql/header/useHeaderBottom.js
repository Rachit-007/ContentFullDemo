import { useQuery } from "@apollo/client";
import { GET_HEADER } from "./headerBottomQuery";

const useHeaderBottomData = () => {
  const {
    data: headerDetails,
    error: headerError,
    loading: headerLoading,
  } = useQuery(GET_HEADER);

  return { headerDetails, headerError, headerLoading };
};

export default useHeaderBottomData;
