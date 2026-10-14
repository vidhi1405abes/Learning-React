import { image_url } from "../utils/constants";
const ItemList = ({ categoryData }) => {
  return categoryData.itemCards.map((item) => {
    return (
      <div
        key={item.card.info.id}
        className="p-2 m-2  border-b-1 flex justify-between"
      >
        <div>
          <div className="text-lg text-left">{item.card.info.name}</div>

          <div className="text-lg text-left">
            {"Rs " +
              (item.card.info.price
                ? item.card.info.price / 100 + "/-"
                : item.card.info.defaultPrice / 100 + "/-")}
          </div>
          <div className="text-xs text-left">{item.card.info.description}</div>
        </div>
        <div className="relative w-30 shrink-0 ml-4">
          <img src={image_url + item.card.info.imageId} className="w-30" />
          <button className="rounded-sm bg-amber-50 h-[40px] w-[80px] text-green-800">
            Add+
          </button>
        </div>
      </div>
    );
  });
};
export default ItemList;
