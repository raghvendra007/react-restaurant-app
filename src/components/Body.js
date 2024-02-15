import { Restrocard, VegPromotedHoc } from "./RestorCard";
import { RES_DATA } from "../utils/constants";
import { useEffect, useState, useRef } from "react";

import { Link } from "react-router-dom";

import { useGetRestaurantQuery } from "../redux/ApiSlice";
import { useInternetStatus } from "../utils/useInternetStatus";

export const Body = () => {
  const {
    isError,
    isLoading,
    isSuccess,
    isFetching,
    data: responseData,
  } = useGetRestaurantQuery();

  let [resData, setResData] = useState([]);
  let [filterData, setFilterData] = useState([]);
  const inputref = useRef("");
  const internetStatus = useInternetStatus();

  const VegPromotedCard = VegPromotedHoc(Restrocard);

  // console.log("response data", responseData);

  useEffect(() => {
    let newData =
      responseData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log("body loads", newData);
    setResData(newData);
    setFilterData(newData);
  }, [responseData]);

  if (internetStatus === false) {
    return (
      <div>
        <h1>No internet please check your connection</h1>
      </div>
    );
  }

  return isLoading ? (
    <div>
      <h1>loading...</h1>
    </div>
  ) : (
    <div>
      <div className="ml-6">
        <div className="search  p-4 ">
          <input
            type="text"
            className="border border-solid border-black 
           placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500
             "
            ref={inputref}
            onChange={(e) =>
              inputref &&
              inputref.current &&
              (inputref.current.value = e.target.value)
            }
          />
          <button
            className="ml-2 bg-blue-200 py-1 px-3 rounded-md"
            onClick={() => {
              let seacrhData =
                inputref && inputref.current && inputref.current.value;
              inputref.current.value = "";

              // let copydata = [...resData];
              let filterData1 = resData.filter((val) =>
                val?.info?.name.toLowerCase().includes(seacrhData.toLowerCase())
              );
              setFilterData(filterData1);
            }}
          >
            Search
          </button>

          <button
            className="m-4 px-2 py-1 bg-blue-200 rounded-md"
            onClick={() => {
              const newarr = resData.filter((val) => val?.info?.avgRating > 4);
              setFilterData(newarr);
              console.log("filter data>>", filterData);
            }}
          >
            Filter the 4+ stars restaurant
          </button>

          <button
            className="m-2  px-2 py-1 bg-blue-200"
            onClick={() => {
              const pureVegData = resData.filter((val) => val?.info?.veg);
              console.log("pure veg>>>", pureVegData);
              setFilterData(pureVegData);
            }}
          >
            Pure Veg
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap ml-4">
        {filterData?.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurants/" + restaurant.info.id}
          >
            {restaurant.info.veg ? (
              <VegPromotedCard props={restaurant} />
            ) : (
              <Restrocard props={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
