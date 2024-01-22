import { cn } from "@/lib/utils";
import { FC } from "react";
import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
}

const CustomLink: FC<CustomLinkProps> = ({ to, className, children }) => {
  return (
    <Link
      to={to}
      className={cn(
        "mt-4 bg-black text-white py-2 px-4 rounded-full w-fit",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
