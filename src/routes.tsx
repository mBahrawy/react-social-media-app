import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// const Module = lazy(() => import("@/modules/Module/Module.component"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <div>Module screen here</div>,
    },
  ]);

  return routes;
};

export default Routes;
