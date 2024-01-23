import { ReactNode } from "react";

const Modal = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="inset-0 fixed bg-black/50 z-50 flex
  items-center justify-center"
    >
      {children}
    </div>
  );
};

export default Modal;
