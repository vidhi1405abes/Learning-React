import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  const MENU_API =
    "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999998&restaurantId=";
  useEffect(() => {
    fetchData(MENU_API + resId + "&submitAction=ENTER");
  }, []);
  async function fetchData(API) {
    const menuData = await fetch(API);
    const json = await menuData?.json();
    setMenu(json?.data);
   
  }
  return menu;
};
export default useRestaurantMenu;