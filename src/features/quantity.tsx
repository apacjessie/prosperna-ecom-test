import { Dispatch, SetStateAction } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  quantityController: {
    quantity: number;
    setQuantity: Dispatch<SetStateAction<number>>;
  };
  className?: string;
}

const Quantity = ({ quantityController, className }: Props) => {
  const { quantity, setQuantity } = quantityController;

  return (
    <section
      className={cn(
        className,
        "flex px-4 border border-black rounded-full w-fit gap-5 py-2"
      )}
    >
      <Minus
        className="cursor-pointer"
        onClick={() => setQuantity((prev) => (prev === 1 ? prev : --prev))}
      />
      <span className="font-[500] text-lg">{quantity}</span>
      <Plus
        className="cursor-pointer"
        onClick={() => {
          if (quantity >= 12) return;
          setQuantity((prev) => ++prev);
        }}
      />
    </section>
  );
};

export default Quantity;
