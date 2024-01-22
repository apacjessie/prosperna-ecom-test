import Header from "@/components/elements/Header";
import { Outlet } from "react-router-dom";
import Banner from "../elements/Banner";

const ShopLayout = () => {
  return (
    <>
      <Banner />
      <Outlet />
    </>
  );
};

export default ShopLayout;
