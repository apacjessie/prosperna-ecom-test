import Banner from "@/components/ui/banner";
import { Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <section className="padding">
      <Banner />
      <Outlet />
    </section>
  );
};

export default Shop;
