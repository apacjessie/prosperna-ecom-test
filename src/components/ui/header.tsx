import { ShoppingCart, FileCog } from "lucide-react";
import CategoryMenus from "../category/CategoryMenus";
import { Link, NavLink } from "react-router-dom";
import useStore from "@/hooks/useStore";

const Header = () => {
  const { cart } = useStore();

  return (
    <header
      className="padding py-4 lg:py-6 flex items-center gap-4
    justify-between"
    >
      <div className="flex items-center">
        <Link to="/" className="text-logo">
          EXCLSV
        </Link>
        <CategoryMenus />
      </div>

      <nav className="flex items-center gap-5">
        <NavLink
          to="/products"
          className="flex gap-2 text-base md:text-lg font-medium"
        >
          <FileCog />
          Add/Modify Product
        </NavLink>
        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? "green" : "black",
          })}
          className={`${({ isActive }: { isActive: boolean }) =>
            isActive ? "text-green-100" : "text-black"}
            flex gap-2 text-base md:text-lg font-medium relative
          `}
        >
          <ShoppingCart />
          Cart
          {cart.length > 0 && (
            <div
              className="absolute bg-green-200 px-2.5 py-0.5 
         items-center rounded-full text-xs -top-1 left-20 hidden md:flex"
            >
              {cart.length}
            </div>
          )}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
