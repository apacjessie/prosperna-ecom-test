import { Product, Gender } from "@/lib/types";
import Modal from "../ui/modal";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectItem,
  SelectContent,
} from "../ui/select";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  product: Product | null;
  actionController: {
    action: { modify: boolean; delete: boolean };
    setAction: Dispatch<SetStateAction<{ modify: boolean; delete: boolean }>>;
  };
  handleEditSave: (data: Product) => void;
}

const Modify = ({ product, actionController, handleEditSave }: Props) => {
  const { action, setAction } = actionController;
  const [disableEdit, setDisableEdit] = useState<boolean>(true);
  const [selectedProduct, setSelectedProduct] = useState<Product>(
    product as Product
  );

  return (
    <Modal>
      <div className="bg-white z-50 p-5 w-full md:w-[35rem]">
        <h1 className="mb-4 tracking-wide text-lg md:text-xl font-semibold">
          Modify product
        </h1>
        <div className="flex flex-col gap-2 ">
          <span className="text-gray-500">Product id: {product?.id}</span>
          <span className="flex flex-col gap-1">
            Product name:{" "}
            <input
              disabled={disableEdit}
              value={selectedProduct?.name}
              className="border border-gray-300 px-2 py-1 disabled:bg-gray-100"
              onChange={(e) =>
                setSelectedProduct({ ...selectedProduct, name: e.target.value })
              }
            ></input>
          </span>

          <span className="flex flex-col gap-2">
            Product gender:{" "}
            <Select
              disabled={disableEdit}
              defaultValue={
                selectedProduct?.gender === Gender.MEN.toLowerCase()
                  ? Gender.MEN
                  : Gender.WOMEN
              }
              onValueChange={(value) =>
                setSelectedProduct({
                  ...selectedProduct,
                  gender: value.toLowerCase() as Gender.MEN | Gender.WOMEN,
                })
              }
            >
              <SelectTrigger className="disabled:bg-gray-200 ">
                <SelectValue></SelectValue>
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
              disabled={disableEdit}
              value={selectedProduct?.price}
              className="border border-gray-300 px-2 py-1 disabled:bg-gray-100"
              onChange={(e) =>
                setSelectedProduct({
                  ...selectedProduct,
                  price: +e.target.value,
                })
              }
            ></input>
          </span>
        </div>
        <div className="mt-5 w-full grid grid-cols-2 items-center justify-around">
          <button
            className="py-1 font-semibold"
            onClick={() => setAction({ ...action, modify: !action.modify })}
          >
            Cancel
          </button>
          {disableEdit ? (
            <button
              className="bg-green-400 py-1 text-white font-semibold"
              onClick={() => setDisableEdit(!disableEdit)}
            >
              Edit
            </button>
          ) : (
            <button
              className="bg-green-400 py-1 text-white font-semibold"
              onClick={() => {
                handleEditSave(selectedProduct);
                setAction({ ...action, modify: false });
              }}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default Modify;
