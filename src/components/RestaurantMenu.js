import React from "react";
import { useState } from "react";
import { useGetRestaurantMenuQuery } from "../redux/ApiSlice";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const Restrauntmenu = () => {
  const [listData, setListData] = useState(false);
  const { resId } = useParams();
  const { isLoading } = useGetRestaurantMenuQuery(resId);
  const resInfo = useRestaurantMenu(resId);
  const [changeIndex, setIndex] = useState(null);

  console.log("resinfo>>", resInfo);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info ?? {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card ?? {};
  console.log("item cards>>", itemCards);

  const newDataforAll =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (item) => {
        return (
          item?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("new data for all", newDataforAll);

  // type.googleapis.com/swiggy.presentation.food.v2.ItemCategory

  console.log(
    "name,cuisines,costForTwoMessage",
    name,
    cuisines,
    costForTwoMessage
  );

  return isLoading ? (
    <div>
      <h1>Loading...</h1>
    </div>
  ) : (
    <div className="text-center">
      <h1 className="font-bold    text-2xl my-10 text-center">{name}</h1>
      <p>
        {cuisines?.join(",")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      {newDataforAll?.map((item, index) => {
        return (
          <RestaurantCategory
            data={item?.card?.card}
            setListData={index === changeIndex ? true : false}
            setNewData={() => setIndex(index)}
          />
        );
      })}
    </div>
  );
};
export default Restrauntmenu;
