import React from "react";
import { Link } from "react-router-dom";

const AppStore = ({ link }) => {
  return (
    <Link target="_blank" to={link}>
      <div className="pb-1">
        <img src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fapp.1b12d473.png&w=32&q=75"></img>
      </div>
    </Link>
  );
};

export default AppStore;
