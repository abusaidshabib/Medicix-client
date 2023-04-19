import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";

const TopMenu = () => {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <div className="bg-secondary-700 w-full h-14 mb-3 rounded-md flex items-center justify-between px-6">
      <div className="flex relative items-center justify-between w-auto">
        <RiMenu2Fill className="text-xl text-neural-500" />
        <AiOutlineArrowLeft className="text-xl text-neural-500" />
      </div>
      <p className="text-neural-400 tracking-wider text-lg">{formattedTime}</p>
      <div className="flex relative items-center justify-between w-auto">
        <IoIosNotifications className="text-3xl text-neural-500" />
        <span className="p-1 animate-ping absolute top-0 right-9 rounded-full bg-info"></span>
        <p className="px-1"></p>
        <CgProfile className="text-2xl text-neural-500" />
      </div>
    </div>
  );
};

export default TopMenu;