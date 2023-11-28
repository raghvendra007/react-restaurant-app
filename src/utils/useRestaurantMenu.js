import { useEffect, useState } from "react";
import { useGetRestaurantMenuQuery } from "../redux/ApiSlice";

export const useRestaurantMenu = (resId) => {
  const { data } = useGetRestaurantMenuQuery(resId);
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    setResInfo(data?.data);
  }, [data]);
  return resInfo;
};
