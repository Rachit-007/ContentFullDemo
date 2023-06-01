import React from "react";

const Category = ({ item }) => {
  console.log("printed");
  return (
    <>
      <div className="flex-col mx-2">
        <img src={item.imageCollection.items[0].url} />
        <p className="text-center font-semibold py-1 text-lg">{item.title}</p>
      </div>
    </>
  );
};

export default Category;
