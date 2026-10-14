import RestaurantCard ,{withTopRatedLabel}from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useNetStatus from "../utils/useNetStatus";


const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [updatedList, setUpdatedList] = useState([]);
  useEffect(() => {
    if (searchText == "") {
      fetchData();
    }
  }, [searchText]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setUpdatedList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  console.log(listOfRestaurants);
  const RestaurantCardWithTopRatedLabel=withTopRatedLabel(RestaurantCard);
  
  const netStatus = useNetStatus();
  if (!netStatus) {
    return <h1>You are Offline</h1>;
  }
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-red-50">
      <div className="topRatedBtn flex items-center">
        <div className="m-4 p-4">
          <input
            className="border-solid border-black border-2"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            className="px-4 py-0.5 m-4 bg-green-300 hover:cursor-pointer rounded-lg"
            onClick={() => {
              const matchRestaurants = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase());
              });
              setUpdatedList(matchRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="m-2 px-4 py-0.5 bg-green-300 hover:cursor-pointer rounded-lg"
          onClick={() => {
            //filter logic
            const filteredRestaurants = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4,
            );
            setUpdatedList(filteredRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {updatedList.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {(restaurant.info.avgRating>4.3)?<RestaurantCardWithTopRatedLabel resData={restaurant.info}/>:<RestaurantCard resData={restaurant.info} />}
            
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
