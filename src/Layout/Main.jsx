import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu/Menu";
import TopMenu from "../Components/Menu/TopMenu";

const Main = () => {
  return (
    <div className="bg-primary-800 min-h-screen min-w-screen flex">
      <Menu></Menu>
      <div className="w-full p-3 ml-64">
        <TopMenu></TopMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
