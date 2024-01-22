import CategoryMenus from "../category/CategoryMenus";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="padding py-4 lg:py-6 flex items-center gap-4">
      <Link to="/" className="text-logo">
        EXCLSV
      </Link>
      <CategoryMenus />
    </header>
  );
};

export default Header;
