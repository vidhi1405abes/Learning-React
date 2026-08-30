const RestaurantCard = (props) => {
  const { resData } = props;
  const {name,cloudinaryImageId,avgRating,cuisines} = resData;

  return (
    <div className="restaurantCard">
      <div className="imageContainer">
        <img className="restaurantImage" src={cloudinaryImageId} />
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