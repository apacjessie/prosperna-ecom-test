import CartList from "@/components/cart/CartList";
import OrderSummary from "@/components/cart/OrderSummary";

const Cart = () => {
  return (
    <section className="padding mt-5 pb-4">
      <h1 className="font-semibold text-xl md:text-2xl mb-5 md:mb-10s">
        Your shopping cart
      </h1>
      <div
        className="mt-5 grid grid-cols-1 gap-4  xl:grid-cols-[70%,_30%] lg:grid-cols-[65%,_35%] w-full h-full
     "
      >
        <CartList />
        <div>
          <OrderSummary />
          <button
            className="bg-black text-white font-bold tracking-wide
           w-full py-3 rounded-full mt-4 hover:bg-black/75"
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
