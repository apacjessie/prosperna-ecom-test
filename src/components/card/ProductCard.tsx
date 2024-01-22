import type { Product } from "@/lib/types";
import { Link } from "react-router-dom";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Link
      to={`/shop/${product.category}/${product.id}`}
      className="flex flex-col bg-gray-100 items-center "
    >
      <img
        src={product.image}
        alt={product.name}
        loading="lazy"
        className="flex-1 object-contain w-[13rem] py-4 h-[13rem] aspect-square 
        cursor-pointer"
      />
      <div className="w-full py-1.5 bg-white ">
        <span className="line-clamp-1 tracking-wide text-lg md:text-base ">
          {product.name}
        </span>
        <span className="font-bold tracking-wide">PHP {product.price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;
