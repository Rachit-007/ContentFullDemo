import useFooter from "../../graphql/footer/useFooter";
import FooterBottom from "./footerBottom/footerBottom";
import FooterMiddle from "./footerMiddle/footerMiddle";
import FooterTop from "./footerTop/footerTop";
import _ from "lodash";
import NewsLetter from "./newsletter/newsLetter";

export const Footer = () => {
  const { footerData, footerLoading, footerError } = useFooter();

  return (
    <>
      <NewsLetter />
      {_.size(footerData) > 0 ? (
        <>
          <div className="bg-black">
            <div className="max-w-7xl mx-auto w-full ">
              <FooterTop
                data={footerData.footerCollection.items[0].footerTop}
              />
              <FooterMiddle
                data={footerData.footerCollection.items[0].footerMiddle}
              />
            </div>
          </div>
          <div>
            <FooterBottom
              data={footerData.footerCollection.items[0].footerBottom}
            />
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};
