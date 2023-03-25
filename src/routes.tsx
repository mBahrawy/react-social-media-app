import { useRoutes } from "react-router-dom";
import { lazy } from "react";

const Home = lazy(() => import("@/modules/Home/Home.component"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Home />,
    },
  ]);

  return routes;
};

export default Routes;
