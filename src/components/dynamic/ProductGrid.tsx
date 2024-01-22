import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductGrid = () => {
  const [shownCategory, setShownCategory] = useState<string>("");
  const [products, setProducts] = useState<[]>([]);
  const { category } = useParams();

  useEffect(() => {
    switch (category) {
      case undefined:
        return setShownCategory("Browse Our Products");
      case "tshirts":
        return setShownCategory("T-shirts For you!");
      case "shirts":
        return setShownCategory("Shirts For you!");
      case "jackets":
        return setShownCategory("Jackets For you!");
      case "sweaters":
        return setShownCategory("Sweaters For you!");
      case "dress":
        return setShownCategory("Dress For you!");
    }
  }, [category]);

  return (
    <section className="mt-6 md:mt-10">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
        {shownCategory}
      </h1>
    </section>
  );
};

export default ProductGrid;
