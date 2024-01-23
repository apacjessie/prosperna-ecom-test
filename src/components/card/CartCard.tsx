import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Quantity from "@/features/quantity";
import ConfirmModal from "../cart/ConfirmModal";
import { CartProduct } from "@/lib/types";

import useStore from "@/hooks/useStore";

interface Props {
  product: CartProduct;
}

const CartCard = ({ product }: Props) => {
  const [remove, setRemove] = useState<boolean>(false);
  const [quantity, setQuantity] = useState<number>(product.quantity);

  const { removeToCart, changeProductQuantity } = useStore();

  const handleRemoving = () => {
    removeToCart(product.id);
    setRemove((prev) => !prev);
  };

  useEffect(() => {
    changeProductQuantity(product.id, quantity);
  }, [quantity, product.id, changeProductQuantity]);

  return (
    <div
      className=" grid grid-cols-1 lg:grid-cols-[10rem,_1fr] md:grid-cols-[8rem,_1fr] 
        h-fit md:items-start md:grid-flow-col gap-1"
    >
      <img
        src={product.image as string}
        className="aspect-square object-contain w-full bg-gray-100 p-2 pointer-events-none"
        alt={product.name}
      />
      <div className="flex flex-col justify-between p-1 lg:w-[95%] xl:w-[90%] h-full relative ">
        <div>
          <p className="font-[500] lg:text-xl w-[90%] md:w-full text-ellipsis line-clamp-1">
            {product?.name}
          </p>
          <p className="text-gray-400 text-sm lg:text-base">
            Product ID: <span>{product.id}</span>
          </p>
          <p>Size: {product.size}</p>
        </div>

        <div className="flex flex-col justify-between md:items-end md:flex-row ">
          <div className="flex items-center gap-x-2 md:block md:gap-x-0">
            <p>Quantity</p>
            <Quantity
              quantityController={{ quantity, setQuantity }}
              className="flex justify-between w-[7rem] items-center rounded-full
                    px-4 py-1"
            />
          </div>
          <p className="font-[500] lg:text-lg uppercase flex justify-between w-full md:w-[12rem]">
            Subtotal:{" "}
            <span className="text-red-500">
              &#8369;{product.price.toFixed(2)}
            </span>
          </p>
        </div>
        <X
          className="absolute right-0 font-bold text-2xl cursor-pointer"
          onClick={() => setRemove((prev) => !prev)}
        />
      </div>
      {remove && (
        <ConfirmModal setRemove={setRemove} handleRemoving={handleRemoving} />
      )}
    </div>
  );
};

export default CartCard;
