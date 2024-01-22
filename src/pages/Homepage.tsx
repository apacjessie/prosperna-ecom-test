import HeroImage from "assets/images/hero.png";
import tshirt from "assets/images/category/tshirt.png";
import shirts from "assets/images/category/shirts.png";
import jacket from "assets/images/category/jacket.png";
import sweaters from "assets/images/category/sweaters.png";
import dress from "assets/images/category/dress.png";
import CategoryCard from "@/components/elements/CategoryCard";

import CustomLink from "@/components/ui/custom-link";

const Hero = () => {
  return (
    <div
      className="flex md:mt-0 pb-10 lg:py-2 xl:py-8 flex-col-reverse gap-x-5  bg-green-100 items-center md:justify-around md:flex-row 
      padding"
    >
      <div
        className="flex flex-col w-full md:items-start
      text-center md:text-left items-center gap-1"
      >
        <span className="text-lg lg:text-2xl xl:text-3xl font-bold text-neutral-500">
          Best Online Store Of The Year
        </span>
        <span className="text-2xl lg:text-4xl xl:text-5xl font-bold">
          We don't do fashion. We are fashion.
        </span>
        <CustomLink to="/">Learn more</CustomLink>
      </div>
      <img
        src={HeroImage}
        alt="EXLSV Hero"
        className="hero-image pointer-events-none"
      />
    </div>
  );
};

const Categories = () => {
  return (
    <section className="padding md:mt-5 lg:mt-10">
      <h2 className="font-semibold text-base md:text-lg lg:text-2xl my-2">
        Shop Our Product Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <CategoryCard image={tshirt} title="T-shirts" link="/shop/tshirts" />
        <CategoryCard image={shirts} title="Shirts" link="/shop/shirts" />
        <CategoryCard image={jacket} title="Jackets" link="/shop/jackets" />
        <CategoryCard image={sweaters} title="Sweaters" link="/shop/sweaters" />
        <CategoryCard image={dress} title="Dresses" link="/shop/dress" />
        <CategoryCard title="Browse" link="/shop" />
      </div>
    </section>
  );
};

const Homepage = () => {
  return (
    <section className="pb-5">
      <Hero />
      <Categories />
    </section>
  );
};

export default Homepage;
