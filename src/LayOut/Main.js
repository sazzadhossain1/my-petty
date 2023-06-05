import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../conponents/Footer/Footer";
import Header from "../conponents/Headers/Header";

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
