import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import callApi from "@/utils/callApi";
import { Gender, Method, PriceSort, Product } from "@/lib/types";
import getCategoryDescription from "@/utils/getCategoryDescription";
import ProductCard from "../card/ProductCard";
import Loader from "../ui/loader";
import Sorter from "@/features/sorter";
import Filter from "@/features/filter";
import SortFilter from "@/utils/sortfilter";

const ProductGrid = () => {
  const [categoryDescription, setCategoryDescription] = useState<string>("");
  const [sortPrice, setSortPrice] = useState<PriceSort>(PriceSort.ASCENDING);
  const [filterGender, setFilterGender] = useState<Gender>(Gender.ALL);

  const { category } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const data =
        category === undefined
          ? await callApi("http://localhost:3000/product", Method.GET)
          : await callApi(
              `http://localhost:3000/product?category=${category}`,
              Method.GET
            );

      return await data;
    },
  });

  useEffect(() => {
    const description = getCategoryDescription(category);
    setCategoryDescription(description);
  }, [category, data]);

  if (isPending) return <Loader />;

  const SortedData = SortFilter({
    data: data,
    sort: sortPrice,
    gender: filterGender,
  });

  return (
    <section className="mt-6 md:mt-10">
      <div className="flex w-full justify-between items-center">
        <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
          {categoryDescription}
        </h1>
        <div className="flex items-center gap-4">
          <Filter value={filterGender} setValue={setFilterGender} />
          <Sorter value={sortPrice} setValue={setSortPrice} />
        </div>
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-3
      xl:grid-cols-5 gap-8 py-4 md:py-8"
      >
        {SortedData && SortedData.length > 0 ? (
          SortedData.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>
            <span className="text-xl tracking-wide">No results...</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
