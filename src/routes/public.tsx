import Shop from "@/pages/Shop";
import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";
import { ShopPathChecker } from "@/features/path-checker";
import Product from "@/pages/Product";
import Cart from "@/pages/Cart";
import AddModify from "@/pages/AddModify";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Homepage /> },
      {
        path: "shop",
        element: <Shop />,
        children: [
          {
            path: ":category?",
            element: <ShopPathChecker />,
          },
        ],
      },
      {
        path: "shop/:category/:id",
        element: <Product />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      { path: "/products", element: <AddModify /> },
    ],
  },
];

export default publicRoutes;
