const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines } = resData;
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
  return (
    <div className="m-4 p-4 w-[200px] bg-blue-300 hover:bg-amber-300 hover:cursor-pointer">
      <div className="">
        <img
          className="rounded-lg w-60 h-40"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt={name}
        />{" "}
      </div>
      <div className="restaurantDetails">
        <h3 className="font-bold p-2 text-center text-lg">{name}</h3>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating}</h4>
        <h4 className="time">{resData.sla.deliveryTime}</h4>
      </div>
    </div>
  );
};
//Higher order component
//input->restcard->card with top rated label
export const withTopRatedLabel=(RestaurantCard)=>{
  return ((props)=>{
    return (
      <>
      <label className="absolute text-white bg-black m-2 p-2 rounded-lg">Top rated</label>
      <RestaurantCard {...props}/>
      </>
    )
  })
}
export default RestaurantCard;
