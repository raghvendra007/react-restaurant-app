import { CDN_URL } from "../utils/constants";

export const Restrocard = ({ props }) => {
  console.log("resdatataa>>", props);
  const {
    info: {
      name,
      avgRating,
      cuisines,
      costForTwo,
      sla: { deliveryTime },
      cloudinaryImageId,
    },
  } = props;
  console.log("name>>>", name);

  return (
    <div className=" m-4  bg-slate-100 w-[250px] rounded-md">
      <img
        className=" py-1 m-2 w-[235px] h-40 rounded-xl"
        alt="res"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="ml-2">
        <h3 className="text-lg font-bold line-clamp-1 py-0.5 ">{name}</h3>
        <h4 className="text-sm font-medium line-clamp-1 py-0.5 ">
          {cuisines.join(" , ")}
        </h4>
        <h4 className="text-sm py-0.5 font-medium">{deliveryTime} Mins</h4>
        <h4 className="text-sm py-0.5 font-medium">{costForTwo}</h4>
        <h4 className="text-sm py-0.5 font-medium">{avgRating} Stars</h4>
      </div>
    </div>
  );
};

export const VegPromotedHoc = (Restrocard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-md">
          Veg
        </label>
        <Restrocard {...props} />
      </div>
    );
  };
};
