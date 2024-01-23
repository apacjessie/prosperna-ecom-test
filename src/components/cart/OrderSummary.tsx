import useStore from "@/hooks/useStore";
import { useState, useEffect } from "react";

const OrderSummary = () => {
  const [total, setTotal] = useState<number>(0);
  const { cart } = useStore();

  useEffect(() => {
    if (cart && cart.length <= 0) setTotal(0);

    const cartTotal = cart
      ?.map((prod) => prod)
      .reduce((total, prod) => {
        return total + prod.price * prod.quantity;
      }, 0);

    setTotal(cartTotal as number);
  }, [cart]);

  const VAT = () => {
    return cart
      ?.map((prod) => prod)
      .reduce((total, prod) => {
        return total + prod.price * prod.quantity * 0.08;
      }, 0)
      .toFixed(2);
  };
  return (
    <div
      className="px-5 py-6 border-2 border-gray-200 w-full h-fit flex flex-col 
      gap-y-5"
    >
      <h1 className="uppercase font-bold  md:text-xl lg:text-lg xl:text-xl">
        Order Summary | <span>{cart && cart.length} item(s)</span>
      </h1>
      <p className="flex justify-between">
        Item(s) subtotal <span>PHP {total.toFixed(2)}</span>
      </p>
      <div>
        <h1 className="font-bold md:text-lg lg:text-base xl:text-lg flex justify-between">
          SUBTOTAL <span>PHP {total.toFixed(2)}</span>
        </h1>
        <p className="text-sm flex justify-between">
          VAT included <span>PHP {VAT()}</span>
        </p>
      </div>
      <h1 className="font-bold md:text-xl lg:text-lg xl:text-xl flex justify-between">
        Order total <span>PHP {total.toFixed(2)}</span>
      </h1>
    </div>
  );
};

export default OrderSummary;
