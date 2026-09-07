import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText,setSearchText]=useState("");
  const [updatedList,setUpdatedList]=useState([]);
  useEffect(() => {
    if(searchText==""){
      fetchData();
    }
  }, [searchText]);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setUpdatedList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };


 
  return listOfRestaurants.length===0?<Shimmer/>:(
    <div className="body">
      <div className="topRatedBtn">
        <div className="search">
          <input className="searchBar" type="text" value={searchText} onChange={(e)=>{
            
              setSearchText(e.target.value);
          }}/>

          <button className="searchBtn" onClick={()=>{
            const matchRestaurants=listOfRestaurants.filter((res)=>{
              return res.info.name.toLowerCase().includes(searchText.toLocaleLowerCase());
              
            })
            setUpdatedList(matchRestaurants);
          }}>Search</button>
        </div>
        <button
          className="filterBtn"
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
      <div className="restaurantContainer">
        {updatedList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};
export default Body;
