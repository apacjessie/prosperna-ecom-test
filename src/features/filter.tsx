import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Gender } from "@/lib/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  value: Gender;
  setValue: Dispatch<SetStateAction<Gender>>;
}

const Filter = ({ value, setValue }: Props) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="border border-gray-400 py-1 md:py-2 px-4 hover:bg-green-100">
          Filter ({value.charAt(0)})
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuCheckboxItem
            checked={value === Gender.ALL}
            onCheckedChange={() => setValue(Gender.ALL)}
          >
            {Gender.ALL}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value === Gender.MEN}
            onCheckedChange={() => setValue(Gender.MEN)}
          >
            {Gender.MEN}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value === Gender.WOMEN}
            onCheckedChange={() => setValue(Gender.WOMEN)}
          >
            {Gender.WOMEN}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filter;
