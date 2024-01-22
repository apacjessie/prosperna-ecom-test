import { Product, PriceSort, Gender } from "@/lib/types";

interface Props {
  data: Product[];
  sort: PriceSort;
  gender: Gender;
}

const SortFilter = ({ data, sort, gender }: Props) => {
  const sortedAndFiltered =
    sort === PriceSort.ASCENDING
      ? data
          .sort((a: Product, b: Product) => a.price - b.price)
          .filter((product) =>
            gender === Gender.ALL
              ? product
              : gender === Gender.MEN
              ? product.gender === Gender.MEN.toLowerCase()
              : Gender.WOMEN && product.gender === Gender.WOMEN.toLowerCase()
          )
      : data.sort((a: Product, b: Product) => b.price - a.price);

  return sortedAndFiltered;
};

export default SortFilter;
