import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../Components/Menu/Menu";
import TopMenu from "../Components/Menu/TopMenu";
import { useSelector } from "react-redux";

const Main = () => {

  const condition = useSelector((state) => state.condition);

  console.log(condition.leftMenu);

  return (
    <div className="bg-primary-800 min-h-screen min-w-screen flex">
        <Menu></Menu>
      <div className="w-full p-3">
        <TopMenu></TopMenu>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Main;
