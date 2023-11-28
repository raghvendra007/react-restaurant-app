import { useSelector, useDispatch } from "react-redux";

import ItemList from "./ItemList";
import { clearCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store?.cart?.items);
  console.log("data lenght>>", data);

  const handleData = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-4 p-4 text-center">
      <h1 className="text-2xl font-bold">Cart</h1>
      {data.length > 0 && (
        <button
          className="m-2 p-2 bg-blue-300 text-white rounded-lg"
          onClick={handleData}
        >
          Clear cart
        </button>
      )}
      {data.length === 0 && <h1>Please add the items in your cart</h1>}

      <div className="w-6/12 m-auto">
        <ItemList data={data} />
      </div>
    </div>
  );
};
export default Cart;
