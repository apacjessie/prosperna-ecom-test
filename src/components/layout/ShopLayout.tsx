import { Outlet } from "react-router-dom";
import Banner from "../ui/banner";

const ShopLayout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default ShopLayout;
