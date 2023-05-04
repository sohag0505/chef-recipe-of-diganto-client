// eslint-disable-next-line no-unused-vars
import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Header from "../pages/shared/Header/Header";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Main;
