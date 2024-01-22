import { useRoutes } from "react-router-dom";
import publicRoutes from "./public";

const AppRoutes = () => {
  const route = publicRoutes;

  return useRoutes(route);
};

export default AppRoutes;
