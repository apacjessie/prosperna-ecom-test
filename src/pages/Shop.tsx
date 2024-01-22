import Banner from "@/components/elements/Banner";
import { useParams, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <section className="padding">
      <Banner />
      <Outlet />
    </section>
  );
};

export default Shop;
