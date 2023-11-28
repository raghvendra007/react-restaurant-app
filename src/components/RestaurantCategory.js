import ItemList from "./ItemList";
const RestaurantCategory = ({ data, setListData, setNewData }) => {
  // const [showlist, setShowList] = useState(false);
  console.log("data>>", data);
  return (
    <div
      className="  bg-gray-100  shadow-lg p-4 w-6/12 mx-auto my-5 cursor-pointer"
      key={data?.title}
    >
      <div
        className="flex justify-between"
        onClick={() => {
          setNewData();
        }}
      >
        <span className="font-bold text-lg">
          {data?.title}({data?.itemCards?.length})
        </span>
        <span> ⬇️ </span>
      </div>
      <div>{setListData && <ItemList data={data?.itemCards} />}</div>
    </div>
  );
};
export default RestaurantCategory;
