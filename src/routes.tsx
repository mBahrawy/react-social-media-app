import { Navigate, useRoutes } from "react-router-dom";
import { lazy } from "react";
import NotFound from "./modules/NotFound/NotFound.component";

const Home = lazy(() => import("@/modules/Home/Home.component"));
const Post = lazy(() => import("@/modules/SinglePost/SinglePost.component"));

const Routes = () => {
  const routes = useRoutes([
    {
      path: "",
      element: <Home />,
    },
    {
      path: "/:id",
      element: <Post />,
    },
    {
      path: "*",
      element: <Navigate to="/404" />,
    },
    {
      path: "404",
      element: <NotFound />,
    },
  ]);

  return routes;
};

export default Routes;
