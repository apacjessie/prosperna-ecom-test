import Shop from "@/pages/Shop";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";
import { ShopPathChecker } from "@/lib/pathchecker";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "shop",
        element: <Shop />,
        children: [{ path: ":category?", element: <ShopPathChecker /> }],
      },
    ],
  },
];

export default publicRoutes;
