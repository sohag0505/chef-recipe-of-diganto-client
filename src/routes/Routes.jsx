import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Blog from "../pages/Blog/Blog";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Registation from "../pages/Registation/Registation";
import ViewRecipes from "../pages/ViewRecipes/ViewRecipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registation",
        element: <Registation></Registation>,
      },
      {
        path: "/recipes",
        element: <ViewRecipes></ViewRecipes>,
      },
    ],
  },
]);

export default router;
