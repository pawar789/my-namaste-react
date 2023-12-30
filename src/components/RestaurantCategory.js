import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };
  console.log("restaurent card show itmes",showItems);
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          onClick={handleClick}
          className="flex justify-between cursor-pointer"
        >
          <span>
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇</span>
        </div>
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
