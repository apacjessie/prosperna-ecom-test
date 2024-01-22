import Header from "../element/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="">
      <Header />
      <Outlet />
    </main>
  );
};

export default MainLayout;
