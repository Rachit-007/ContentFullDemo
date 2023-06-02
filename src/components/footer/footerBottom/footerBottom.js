import React from "react";

const FooterBottom = ({ data }) => {
  return (
    <div className="bg-[#191919] text-[#999999] py-5 text-center text-sm  mx-auto w-full">
      <h1>{data.copyrights}</h1>
    </div>
  );
};

export default FooterBottom;
