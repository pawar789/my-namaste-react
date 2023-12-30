import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { MENU_API } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const RestaurantsMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurentMenu(resId);

  const [showIndex, setShowIndex] = useState(null);
  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(itemCards);
  // console.log("restaurent menu reder", categories);
  console.log(categories);
  console.log("show index",showIndex);
  
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}

      {categories.map((catagory, index) => (
        <RestaurantCategory
          key={catagory?.card?.card.title}
          data={catagory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );

};
export default RestaurantsMenu;
