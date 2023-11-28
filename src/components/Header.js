import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useInternetStatus } from "../utils/useInternetStatus";

export const Header = () => {
  const internetStatus = useInternetStatus();
  const data = useSelector((store) => store?.cart?.items);

  console.log("data comng from store>>", data);

  return (
    <div className="flex justify-between bg-pink-100 shadow-md ">
      <div className="py-6 px-4">
        <img className="w-24" alt="logo" src={LOGO_URL} />
      </div>
      <div className="">
        <ul className="flex p-2 m-3">
          <li className="p-1 m-2 text-xl">
            Status-{internetStatus ? "✅ " : "🔴"}
          </li>
          <li className="p-1 m-2 text-xl">
            <Link to={"./"}>Home</Link>
          </li>
          <li className="p-1 m-2 text-xl">
            <Link to={"./about"}>About</Link>
          </li>
          <li className="p-1 m-2 text-xl">
            <Link to={"/cart"}>Cart-{data.length}</Link>
          </li>

          <li className="p-1 m-2 text-xl">
            <Link to={"/contact"}>Contact</Link>
          </li>

          <li className="p-1 m-2 text-xl">
            <Link to={"/hotel"}>Hotels</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
