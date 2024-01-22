import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { PriceSort } from "@/lib/types";
import { ArrowDown01, ArrowUp01 } from "lucide-react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: PriceSort;
  setValue: Dispatch<SetStateAction<PriceSort>>;
}

const Sorter = ({ value, setValue }: Props) => {
  return (
    <div className="flex items-center">
      <span className="w-[4.5rem] md:w-[6rem]">Sort by:</span>
      <div className="w-full hidden md:block">
        <Select
          defaultValue={value}
          onValueChange={(value) => setValue(value as PriceSort)}
        >
          <SelectTrigger className="border border-gray-400 rounded-lg">
            <SelectValue placeholder="Price: "></SelectValue>
          </SelectTrigger>

          <SelectContent className="bg-white">
            <SelectItem value={PriceSort.ASCENDING}>
              Price: Ascending
            </SelectItem>
            <SelectItem value={PriceSort.DESCENDING}>
              Price: Descending
            </SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="block md:hidden">
        <button
          type="button"
          onClick={() =>
            setValue((prev) =>
              prev === PriceSort.ASCENDING
                ? PriceSort.DESCENDING
                : PriceSort.ASCENDING
            )
          }
          className="flex items-center"
        >
          {value === PriceSort.ASCENDING ? <ArrowDown01 /> : <ArrowUp01 />}
        </button>
      </div>
    </div>
  );
};

export default Sorter;
