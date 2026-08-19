import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Shop from "../components/Shop";
import Service from "../components/Service";

const route = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "service",
        element: <Service />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default route;
