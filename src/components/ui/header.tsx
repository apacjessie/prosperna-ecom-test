import { ShoppingCart, FileCog } from "lucide-react";
import CategoryMenus from "../category/CategoryMenus";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
          to="/cart"
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
            flex gap-2 text-base md:text-lg font-medium
          `}
        >
          <ShoppingCart />
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
