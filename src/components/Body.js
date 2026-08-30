import RestaurantCard from "./RestaurantCard";
import resObj from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants,setListOfRestaurants]=useState(resObj);
  return (
    <div className="body">
      <div className="topRatedBtn">
        <button className="filterBtn" onClick={()=>{
          //filter logic
          const filteredRestaurants=listOfRestaurants.filter((restaurant)=>(restaurant.info.avgRating>4))
          setListOfRestaurants(filteredRestaurants);
        }}>Top Rated restaurants</button>
      </div>
      <div className="restaurantContainer">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;