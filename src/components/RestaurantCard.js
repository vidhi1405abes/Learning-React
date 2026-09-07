const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, avgRating, cuisines } = resData;
  const CDN_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660";
  return (
    <div className="restaurantCard">
      <div className="imageContainer">
        <img
          className="restaurantImage"
          src={`${CDN_URL}/${cloudinaryImageId}`}
          alt={name}
        />{" "}
      </div>
      <div className="restaurantDetails">
        <h3 className="title">{name}</h3>
        <h4 className="cuisine">{cuisines.join(", ")}</h4>
        <h4 className="rating">{avgRating}</h4>
        <h4 className="time">{resData.sla.deliveryTime}</h4>
      </div>
    </div>
  );
};
export default RestaurantCard;
