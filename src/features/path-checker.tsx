import { useParams } from "react-router-dom";
import { NotValid } from "@/pages/NotFound";
import ProductGrid from "@/components/dynamic/ProductGrid";
import isCategoryValid from "@/utils/isCategoryValid";

export const ShopPathChecker = () => {
  const { category } = useParams();

  if (!isCategoryValid(category))
    return <NotValid message="Product with that category does not exists!" />;

  return <ProductGrid />;
};
