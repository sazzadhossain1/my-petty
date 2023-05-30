import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./LayOut/Main";
import Home from "./conponents/Home/Home";
import About from "./conponents/About/About";
import Service from "./conponents/Service/Service";

function App() {
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
          path: "/home",
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
