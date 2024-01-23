import Loader from "@/components/ui/loader";
import Quantity from "@/features/quantity";
import useStore, { StoreState } from "@/hooks/useStore";
import { Method, Product as IProduct, Size } from "@/lib/types";
import callApi from "@/utils/callApi";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import SelectSize from "@/features/select-size";
import { NotValid } from "./NotFound";

const Product = () => {
  const { id } = useParams();
  const { cart, addToCart }: StoreState = useStore();
  const [size, setSize] = useState<Size>(Size.SMALL);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = (product: IProduct) => {
    const isExisted = cart.find((prod) => prod.id === id && prod.size === size);
    if (isExisted) return;
    addToCart({ ...product, quantity, size });
  };

  const { isPending, data } = useQuery({
    queryKey: ["product"],
    queryFn: async () =>
      await callApi(`http://localhost:3000/product/${id}`, Method.GET),
  });

  if (isPending) return <Loader />;

  return (
    <section className="padding pb-4">
      {data && id !== "undefined" ? (
        <div className="grid  grid-cols-1 lg:grid-cols-2 lg:gap-y-0 xl:gap-x-5 gap-x-10">
          <img
            src={data.image}
            alt={data.name}
            loading="lazy"
            className="aspect-square w-full p-10 bg-gray-100 object-contain pointer-events-none"
          />
          <div className="flex flex-col mt-10 md:mt-2">
            <h1 className="text-2xl lg:text-xl xl:text-4xl font-semibold pb-4">
              {data.name}
            </h1>
            <p className="md:text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo, expedita culpa! Inventore illo deserunt sit voluptatem
              exercitationem sunt sed vero iusto vel facere voluptas aspernatur
              fugiat adipisci, libero aperiam magnam!
            </p>

            <div className="my-5 flex items-center gap-2">
              <span className=" bg-green-200 text-gray-600 w-fit px-3 py-1 rounded-full">
                {data.category}
              </span>
              <span className=" bg-green-200 text-gray-600 w-fit px-3 py-1 rounded-full">
                {data.gender}
              </span>
            </div>

            <span className="text-2xl xl:text-2xl 2xl:text-3xl font-bold mt-4">
              &#8369; {data.price}
            </span>

            <SelectSize sizeController={{ size: size, setSize: setSize }} />

            <div className="flex items-center gap-x-4 mt-5">
              <Quantity
                quantityController={{ quantity, setQuantity }}
                className="flex items-center p-4 py-3 xl:py-3.5 lg:py-2
               rounded-full  justify-around w-[10rem]"
              />
              <p className="text-xs md:text-sm lg:text-base">
                Only <span className="text-green-300">12 Item</span> Left!{" "}
                {<br></br>} Don't miss it
              </p>
            </div>

            <div className="mt-10 w-full flex items-center gap-10">
              <button
                type="button"
                className="product-btn bg-black text-white hover:bg-black/75"
              >
                Buy now
              </button>
              <button
                type="button"
                onClick={() => handleAddToCart(data)}
                className="product-btn text-white bg-green-400 hover:bg-green-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ) : (
        <NotValid message="No product with that id" />
      )}
    </section>
  );
};

export default Product;
