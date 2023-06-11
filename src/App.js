import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./conponents/Home/Home";
import About from "./conponents/About/About";
import Service from "./conponents/Service/Service";
import HomeService from "./conponents/HomeService/HomeService";
import SingleExprt from "./conponents/SingleExprt/SingleExprt";
import Login from "./conponents/Login/Login";
import Register from "./conponents/Register/Register";

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
          loader: async () => {
            return fetch("service.json");
          },
          element: <Service></Service>,
        },
        {
          path: "/homeService",

          element: <HomeService></HomeService>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },

        {
          path: "/singleExprt/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://my-pettu-server.vercel.app/exprtData/${params.id}`
            );
          },
          element: <SingleExprt></SingleExprt>,
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
