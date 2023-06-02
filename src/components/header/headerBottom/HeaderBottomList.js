import React, { useState } from "react";
import { Link } from "react-router-dom";

const HeaderBottomList = ({ items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
    >
      <li className="flex p-3.5 px-8 border-b-4 border-transparent ease-out transition-all hover:border-red-700">
        <Link to={items.link}>
          <span className="cursor-pointer">{items.title}</span>
        </Link>
        <svg
          className="ms-3 mt-1.5 cursor-pointer"
          fill="white"
          height="12px"
          width="12px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
        >
          <path
            id="XMLID_225_"
            d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
          c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
          />
        </svg>
      </li>
      {showDetails == true ? (
        <div className="absolute  w-full left-0 bg-white z-10  text-black shadow-xl pb-3 flex flex-wrap gap-20 px-10 m-auto ">
          {items.subCategoryCollection.items.map((item) => {
            return (
              <div>
                <Link to={`${items.link}-${item.link}`}>
                  <p className="font-semibold text-lg pt-4">{item.title}</p>
                </Link>
                {item.subCategoryCollection.items.map((subItems) => (
                  <Link to={`${items.link}-${item.link}-${subItems.link}`}>
                    <p className="font-light pt-1">{subItems.title}</p>
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeaderBottomList;
