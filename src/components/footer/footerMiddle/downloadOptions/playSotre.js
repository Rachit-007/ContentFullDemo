import React from "react";
import { Link } from "react-router-dom";

const PlaySotre = ({ link }) => {
  return (
    <Link target="_blank" to={link}>
      <div>
        <img src="https://krish-commercetools-accelerator.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fplay.4967912f.png&w=32&q=75"></img>
      </div>
    </Link>
  );
};

export default PlaySotre;
