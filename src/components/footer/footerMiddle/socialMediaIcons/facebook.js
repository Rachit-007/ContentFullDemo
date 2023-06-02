import React from "react";
import { Link } from "react-router-dom";

const Facebook = ({ link }) => {
  return (
    <Link to={link} target="_blank">
      <div className="p-2 border-2 border-gray-500 rounded-full w-10">
        <svg
          fill="rgb(107 114 128)"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 512 512"
        >
          <g id="7935ec95c421cee6d86eb22ecd11b7e3">
            <path
              d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379
                c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302
                c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263
                l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"
            ></path>
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default Facebook;
