import { useState } from "react";

import ItemList from "./ItemList";
const RestaurantCategory = ({ categoryData }) => {
  // console.log(categoryData);
  const [showBody, setBodyShow] = useState(false);
  const handleClick = () => {
    setBodyShow(!showBody);
  };
  return (
    <div className="w-6/12 bg-amber-200 mx-auto my-[10px]">
      {/* header */}
      <div
        className=" flex justify-between  p-2 cursor-pointer"
        onClick={handleClick}
      >
        <span className="text-2xl">
          {categoryData.title + " " + "(" + categoryData.itemCards.length + ")"}
        </span>
        <span className="text-2xl">⬇️</span>
      </div>
      {/* body */}
      <div>{showBody ? <ItemList categoryData={categoryData} /> : null}</div>
    </div>
  );
};
export default RestaurantCategory;
