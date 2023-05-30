import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./conponents/Home/Home";
import About from "./conponents/About/About";
import Service from "./conponents/Service/Service";
import HomeService from "./conponents/HomeService/HomeService";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch("provideService.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/home",
          loader: async () => {
            return fetch("provideService.json");
          },
          element: <Home></Home>,
        },
        {
          path: "/about",

          element: <About></About>,
        },
        {
          path: "/service",
          element: <Service></Service>,
        },
        {
          path: "/homeService",

          element: <HomeService></HomeService>,
        },
      ],
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
