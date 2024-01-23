import useStore from "@/hooks/useStore";
import { CartProduct, Product } from "@/lib/types";
import { Link } from "react-router-dom";
import CartCard from "../card/CartCard";

const CartList = () => {
  const { cart } = useStore();

  return (
    <div
      className="mt-5 grid grid-cols-1 gap-5  xl:grid-cols-[70%,_30%] 
    lg:grid-cols-[65%,_35%] w-full h-full "
    >
      {cart && cart?.length >= 1 ? (
        <div>
          <div className="grid grid-rows-[repeat(5,_min-content)]  gap-y-8 h-[calc(100vh_-_18rem)] lg:h-[calc(100vh_-_20.5rem)] overflow-y-scroll">
            {cart?.map((prod: Product) => (
              <CartCard key={prod.id} product={prod as CartProduct} />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="mb-4 text-xl">Your cart is empty</h1>
          <Link
            to={"/shop"}
            className="bg-black text-white px-4 py-2 w-fit
            md:text-lg uppercase
          "
          >
            Continue Shopping
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartList;
