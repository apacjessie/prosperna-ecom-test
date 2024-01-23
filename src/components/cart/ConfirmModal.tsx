import { Dispatch, SetStateAction } from "react";

interface ModalProps {
  setRemove: Dispatch<SetStateAction<boolean>>;
  handleRemoving: () => void;
}

export const ConfirmModal = ({ setRemove, handleRemoving }: ModalProps) => {
  return (
    <div className="absolute inset-0 bg-black/25 flex items-center justify-center z-50 p-2">
      <div className="bg-white p-5 py-6 flex flex-col gap-y-5 ">
        <div>
          <h1 className="uppercase text-xl font-[500]">Remove Item</h1>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="text-lg">
            Are you sure you want to remove this item from your cart?
          </p>
          <div className="grid grid-cols-2 w-full justify-between gap-x-4">
            <button
              onClick={handleRemoving}
              className="bg-black font-[500] uppercase text-white text-xl p-1"
            >
              Remove
            </button>
            <button
              onClick={() => setRemove((prev) => !prev)}
              className="bg-black font-[500] uppercase text-white text-xl"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
