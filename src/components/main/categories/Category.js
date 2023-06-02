import React from "react";

const Category = ({ item }) => {
  return (
    <>
      <div className="flex-col max-sm:mx-4">
        <img src={item.imageCollection.items[0].url} className="text-center" />
        <p className="text-center font-semibold items-center py-1 text-lg">
          {item.title}
        </p>
      </div>
    </>
  );
};

export default Category;
