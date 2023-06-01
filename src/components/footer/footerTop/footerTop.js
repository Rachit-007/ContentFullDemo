import React from "react";
import FooterColumns from "./footerColumns";

const FooterTop = ({ data }) => {
  return (
    <div className="flex justify-between px-12 pt-12 pb-3 row-auto gap-11 border-b-1">
      <div className="text-gray-600 max-w-[500px] col-6 ">
        <img src={data.footerLogo.url} />
        <p className="pt-7 text-gray-500 text-lg">{data.footerLogoText}</p>
      </div>
      {data.footerColumnsCollection.items.map((item) => (
        <div className="flex-1">
          <FooterColumns item={item} />
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
