import _ from "lodash";
import React from "react";

const FooterColumns = ({ item }) => {
  return (
    <>
      <div className="text-gray-300 font-bold text-xl text-left max-md:mt-10 ">
        <h1 className="uppercase tracking-wider pb-1">{item.heding}</h1>
        <ul className="text-left font-normal text-base text-gray-500">
          {_.size(item.contetnsCollection.items) > 0 ? (
            item.contetnsCollection.items.map((list, index) => (
              <li className="pt-2" key={index}>
                {list.content}
              </li>
            ))
          ) : (
            <></>
          )}
        </ul>
      </div>
    </>
  );
};

export default FooterColumns;
