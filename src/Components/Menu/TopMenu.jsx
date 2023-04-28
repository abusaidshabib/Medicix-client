import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosNotifications } from "react-icons/io";
import { RiMenu2Fill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const TopMenu = () => {
  const date = new Date();
  const formattedTime = date.toLocaleTimeString("en-US", {
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const cart = useSelector((state) => state.cart.cart);

  return (
    <div className="bg-secondary-700 w-full h-14 mb-3 rounded-md flex items-center justify-between px-6">
      <div className="flex relative items-center justify-between w-auto">
        <RiMenu2Fill className="text-xl text-neural-500" />
        <AiOutlineArrowLeft className="text-xl text-neural-500" />
      </div>
      <p className="text-neural-400 tracking-wider text-lg">{formattedTime}</p>

      <div className="flex relative items-center justify-between w-auto">
        <Link to="/invoice/cart-edit" className="relative inline-flex w-fit">
          <div className="absolute bottom-auto left-auto right-0 top-0 z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-indigo-700 px-2.5 py-1 text-center align-baseline text-xs font-bold leading-none text-white">
            {cart.length}
          </div>
          <IoIosNotifications className="text-3xl text-neural-500" />
        </Link>
        <div className="px-2"></div>
        <CgProfile className="text-2xl text-neural-500" />
      </div>
    </div>
  );
};

export default TopMenu;
