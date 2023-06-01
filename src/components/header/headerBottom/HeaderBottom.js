import _ from "lodash";
import React from "react";
import HeaderBottomList from "./HeaderBottomList";
import useHeaderBottomData from "../../../graphql/header/useHeaderBottom";

const HeaderBottom = () => {
  // const [headerDetails, setHeaderDetails] = useState([]);

  // const getHeaderDetail = async () => {
  //   let data = await header.getEntries({
  //     content_type: "header",
  //     include: 3,
  //   });
  //   console.log(data.items);
  //   setHeaderDetails(data.items[0].fields.headeItems);
  // };

  // useEffect(() => {
  //   getHeaderDetail();
  // }, []);

  // console.log(headerDetails);

  // console.log(headerError);

  const { headerDetails, headerError, headerLoading } = useHeaderBottomData();

  return (
    <div>
      {_.size(headerDetails) > 0 ? (
        <div className=" bg-black  text-white text-md ">
          <ul className="flex justify-center  max-w-screen-lg m-auto font-semibold relative ">
            {headerDetails.header.headeItemsCollection.items.map(
              (item, index) => (
                <HeaderBottomList items={item} key={index} />
              )
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderBottom;
