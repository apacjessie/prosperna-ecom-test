import tshirts from "assets/images/category/tshirt.png";
import CustomLink from "../ui/custom-link";

const Banner = () => {
  return (
    <div className="bg-green-100">
      <div className="flex  items-center justify-around py-10">
        <div className="flex flex-col items-start">
          <span className="text-sm md:text-2xl lg:text-4xl font-bold">
            Grab Upto 50% off on <br></br>Selected T-shirts
          </span>
          <CustomLink to="/shop/tshirts" className="px-6">
            Buy now
          </CustomLink>
        </div>
        <img
          src={tshirts}
          alt="Tshirts"
          className="object-contain w-[6rem] md:w-[8rem] lg:w-[14rem]"
        />
      </div>
    </div>
  );
};

export default Banner;
