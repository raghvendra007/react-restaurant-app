import React, { useState } from "react";
import { CDN_URL } from "../utils/constants";
// import {useAddCartQuery} from "../redux/ApiSlice"
import { useDispatch, useSelector } from "react-redux";
import { addItemsToCart } from "../redux/cartSlice";

const ItemList = ({ data }) => {
  // const[addData,setAddData]=useState(0)
  // console.log("item list>>>", data);
  const dispatch = useDispatch();
  // const cartData = useSelector((store) => store.cart.value);
  const handleData = (val) => {
    console.log("send to cart", val);
    let item = val?.card?.info?.name;
    console.log("item to dipatch", item);
    dispatch(addItemsToCart(val));
  };
  return (
    <div>
      {data.map((val) => (
        <div
          key={val?.card?.info?.id}
          className="m-2 p-2  border-gray-400 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="py-2 p-1">{val?.card?.info?.name}</span>
              <span>
                ₹
                {val?.card?.info?.price
                  ? val?.card?.info?.price / 100
                  : val?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{val?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute mx-12 ">
              <button
                onClick={() => handleData(val)}
                className=" p-1 rounded-lg bg-black text-white"
              >
                Add +
              </button>
            </div>
            <img alt="res-img" src={CDN_URL + val?.card?.info?.imageId} />
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
