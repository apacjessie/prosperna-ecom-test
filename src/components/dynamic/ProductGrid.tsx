import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import fetchJson from "@/utils/fetchJson";
import { Method } from "@/lib/types";
import getCategoryDescription from "@/utils/getCategoryDescription";

const ProductGrid = () => {
  const [categoryDescription, setCategoryDescription] = useState<string>("");
  const { category } = useParams();
  const { isPending, data } = useQuery({
    queryKey: ["products", category],
    queryFn: async () => {
      const data =
        category === undefined
          ? await fetchJson("http://localhost:3000/product", Method.GET)
          : await fetchJson(
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

  return (
    <section className="mt-6 md:mt-10">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
        {categoryDescription}
      </h1>
      {data && <div>{JSON.stringify(data)}</div>}
    </section>
  );
};

export default ProductGrid;
