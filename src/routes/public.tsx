import MainLayout from "../components/layout/MainLayout";
import Homepage from "../pages/Homepage";

const publicRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ index: true, element: <Homepage /> }],
  },
];

export default publicRoutes;
