import Header from "@/components/elements/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="font-poppins">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
