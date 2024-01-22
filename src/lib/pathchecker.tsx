import { useParams } from "react-router-dom";
import { NotValid } from "@/pages/NotFound";
import ProductGrid from "@/components/dynamic/ProductGrid";

export const ShopPathChecker = () => {
  const { category } = useParams();

  const validCategory = [
    "tshirts",
    "shirts",
    "dress",
    "jackets",
    "sweaters",
    undefined,
  ];
  const isCategoryValid = validCategory.includes(category);

  if (!isCategoryValid)
    return <NotValid message="Product with that category does not exists!" />;

  return <ProductGrid />;
};
