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
        <DropdownMenuTrigger
          className="border border-gray-400 py-1 md:py-2 px-4 hover:bg-green-100"
          data-testid="dropdown-trigger"
        >
          Filter: ({value.charAt(0).toUpperCase()})
        </DropdownMenuTrigger>
        <DropdownMenuContent data-testid="dropdown-content">
          <DropdownMenuCheckboxItem
            checked={value === Gender.ALL}
            onCheckedChange={() => setValue(Gender.ALL)}
            data-testid="filter-all"
          >
            {Gender.ALL}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value === Gender.MEN}
            onCheckedChange={() => setValue(Gender.MEN)}
            data-testid="filter-men"
          >
            {Gender.MEN}
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={value === Gender.WOMEN}
            onCheckedChange={() => setValue(Gender.WOMEN)}
            data-testid="filter-women"
          >
            {Gender.WOMEN}
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Filter;
