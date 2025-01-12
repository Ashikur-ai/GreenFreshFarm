import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import HomePage from "../pages/client/homePage/HomePage";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Mainlayout />,
    children: [
      {
        path: '/',
        element: <HomePage/>
      }
    ]
  }
])

export default router;