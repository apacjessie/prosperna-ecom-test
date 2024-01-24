import { Size } from "@/lib/types";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Dispatch, SetStateAction } from "react";

interface Props {
  sizeController: {
    size: Size;
    setSize: Dispatch<SetStateAction<Size>>;
  };
}

const SelectSize = ({ sizeController }: Props) => {
  const { size, setSize } = sizeController;
  return (
    <Select
      defaultValue={size}
      onValueChange={(value) => setSize(value as Size)}
    >
      <SelectTrigger className="my-4 py-6 xl:w-4/6">
        <SelectValue placeholder="Select size..."></SelectValue>
        <SelectContent>
          <SelectItem value={Size.SMALL}>Small</SelectItem>
          <SelectItem value={Size.MEDIUM}>Medium</SelectItem>
          <SelectItem value={Size.LARGE}>Large</SelectItem>
          <SelectItem value={Size.XL}>XL</SelectItem>
        </SelectContent>
      </SelectTrigger>
    </Select>
  );
};

export default SelectSize;
