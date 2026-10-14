import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu == null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } =
    menu?.cards[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => {
      if (
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      ) {
        return c;
      }
    });
  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-2xl my-[20px]">{name}</h1>
      <h2 className="font-bold">{cuisines.join(" ,")}</h2>
      {/* categories */}
      {categories.map((c)=>{
        return <RestaurantCategory key={c.card.card.title} categoryData={c?.card?.card}/>;
      })}
      
    </div>
  );
};
export default RestaurantMenu;
