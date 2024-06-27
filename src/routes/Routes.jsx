import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main/Main";
import Errorpage from "../pages/Errorpage/Errorpage";
import Todo from "../pages/Todo";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/todo",
        element: <Todo />,
      },
    ],
  },

  {
    path: "*",
    element: <Errorpage />,
  },
]);
