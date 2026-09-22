import { useEffect, useState } from "react";
import menuMock from "../utils/menuMock";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
const RestaurantMenu = () => {
  console.log(useState());
  
  const {resId}=useParams();
  const [resInfo,setResInfo]= useState(null);
  useEffect(()=>{
    setResInfo(menuMock[resId])
  },[resId])
  if(resInfo==null){
    return <Shimmer/>;
  }
  const {name, costForTwoMessage, cuisines, avgRating}=resInfo?.cards[0]?.card?.card?.info;
  const {itemCards}=resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[0]?.card?.card;
  console.log(itemCards);
  
  return (
    
    <div className="menu">
      <h1>{name}</h1>
      <h2>{cuisines.join(" ,")}</h2>
      <h3>{costForTwoMessage}</h3>
      <h4>{avgRating}</h4>
      <h2>Menu</h2>
      <ul>
        {
          itemCards.map((items)=>{
            return <li key={items?.card?.info?.id}>{items?.card?.info?.name}- {items?.card?.info?.price}</li>
          })
        }
        
      </ul>
    </div>
  );
};
export default RestaurantMenu;
