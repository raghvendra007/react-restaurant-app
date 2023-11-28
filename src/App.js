import React, { Suspense, lazy } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Body } from "./components/Body";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Error from "./components/error";
import Restrauntmenu from "./components/RestaurantMenu";
// import Hotel from "./components/Hotels";
const Hotel = React.lazy(() => import("./components/Hotels"));

const Aplayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Aplayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <Restrauntmenu />,
      },
      {
        path: "/hotel",
        element: (
          <Suspense fallback={<h1>Loading.....</h1>}>
            <Hotel />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;
