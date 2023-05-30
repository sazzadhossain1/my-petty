import React from "react";
import Header from "../conponents/Headers/Header";
import { Outlet } from "react-router-dom";
import Footer from "../conponents/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
