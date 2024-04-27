
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto gap-y-10 gap-x-5 min-h-[80vh]"
    >
      <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-5 p-4 mt-10 ml-5 rounded-xl outline w-80" >

        <div>
          <img className="h-[180px] "  src={item.image} />
        </div>
        <div>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.title}</h1>
          <h1 className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ") + "..."}</h1>
          <div>
            <p className="text-green-600 font-semibold">{item.price}</p>
            <div className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart}>
              Remove from Cart
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
