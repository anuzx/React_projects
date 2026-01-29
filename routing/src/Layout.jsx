import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
      //header and footer will remain same but inside content will keep on changing depending upon page
    <>
          <Header />
          <Outlet/>
          <Footer/>
    </>
  );
}

export default Layout;
