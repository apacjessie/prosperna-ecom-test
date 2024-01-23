import { Product, Gender, Category } from "@/lib/types";
import Modal from "../ui/modal";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../ui/select";
import { useState } from "react";
import { nanoid } from "nanoid";

interface Props {
  handleAddProduct: (product: Product) => void;
}

const Add = ({ handleAddProduct }: Props) => {
  const [product, setProduct] = useState<Product>({
    id: nanoid(),
    category: "",
    gender: "",
    image: "",
    name: "",
    price: 0,
    rating: 0,
  });

  return (
    <Modal>
      <form className="bg-white z-50 p-5 w-full md:w-[35rem]">
        <h1 className="mb-4 tracking-wide text-lg md:text-xl font-semibold">
          Add Product
        </h1>
        <div className="flex flex-col gap-5 ">
          <span className="text-gray-500">Product id: {product?.id}</span>
          <span className="flex flex-col gap-1">
            Product name:{" "}
            <input
              required
              className="border border-gray-300 px-2 py-1 disabled:bg-gray-100"
            ></input>
          </span>

          <span className="flex flex-col gap-2">
            Product gender:
            <Select required>
              <SelectTrigger className="disabled:bg-gray-200 ">
                <SelectValue placeholder="Select gender..."></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Gender.MEN}>{Gender.MEN}</SelectItem>
                <SelectItem value={Gender.WOMEN}>{Gender.WOMEN}</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span className="flex flex-col gap-2">
            Product category:
            <Select required>
              <SelectTrigger className="disabled:bg-gray-200 ">
                <SelectValue placeholder="Select category..."></SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value={Gender.MEN}>{Gender.MEN}</SelectItem>
                <SelectItem value={Gender.WOMEN}>{Gender.WOMEN}</SelectItem>
              </SelectContent>
            </Select>
          </span>

          <span className="flex flex-col gap-1">
            Product price:{" "}
            <input
              required
              type="number"
              min={1}
              className="border border-gray-300 px-2 py-1 disabled:bg-gray-100"
              onChange={(e) =>
                setProduct((prev) => {
                  return { ...prev, price: +e.target.value };
                })
              }
            ></input>
          </span>

          <span className="flex flex-col gap-1">
            Product image
            <input required type="file" name="image" accept="image/*" />
          </span>
        </div>
        <div className="mt-5 w-full grid grid-cols-2 items-center justify-around">
          <button className="py-1 font-semibold">Cancel</button>

          <button className="bg-green-400 py-1 text-white font-semibold">
            Save
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default Add;
