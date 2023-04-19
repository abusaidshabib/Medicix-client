import React from "react";
import { Link, NavLink } from "react-router-dom";
import {
  MdDashboard,
  MdPayment,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { IoIosAnalytics, IoMdLogOut } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";

const Menu = () => {
  return (
    <div className="w-64 min-h-screen bg-secondary-700 fixed">
      <div className="px-6 pt-8">
        <Link to="/" className="text-center">
          <p className="text-accent-400 tracking-wider text-3xl font-cursive">
            Medic-ix
          </p>
        </Link>
        <div className="pt-6">
          <hr className="border-secondary-500" />
        </div>
        <div className="pt-4">
          <ul className="list-none">
            <li className="text-neural-700 hover:bg-secondary-600 rounded-md transform transition-all hover:translate-x-4">
              <NavLink
                to="/dashboard"
                className="w-full h-full font-sans tracking-wider flex items-center  hover:text-accent-500 p-3"
              >
                <MdDashboard className="text-2xl" />
                <span className="text-secondary-300 pl-3">Dashboard</span>
              </NavLink>
            </li>
            <li className="text-neural-700 hover:bg-secondary-600 rounded-md flex justify-between items-center transform transition-all hover:translate-x-4">
              <NavLink
                className="w-full h-full font-sans tracking-wider flex items-center justify-between  hover:text-accent-500 p-3"
                to="/analytics"
              >
                <span className="flex items-center">
                  <IoIosAnalytics className="text-2xl" />
                  <span className="text-secondary-300 pl-3">Analytics</span>
                </span>
              </NavLink>
            </li>
            <li className="text-neural-700 hover:bg-secondary-600 rounded-md transform transition-all hover:translate-x-4">
              <NavLink className="w-full h-full font-sans tracking-wider p-3 flex items-center  hover:text-accent-500" to="/invoice">
                <MdPayment className="text-2xl" />
                <span className="text-secondary-300 pl-3">Invoice</span>
              </NavLink>
            </li>
            <li className="text-neural-700 hover:bg-secondary-600 rounded-md flex justify-between items-center transform transition-all hover:translate-x-4">
              <Link className="w-full h-full font-sans tracking-wider flex items-center justify-between  hover:text-accent-500 p-3">
                <span className="flex items-center">
                  <MdProductionQuantityLimits className="text-2xl" />
                  <span className="text-secondary-300 pl-3">Product</span>
                </span>

                <BsChevronDown className="text-secondary-400" />
              </Link>
            </li>
            <ul className="list-none pl-6">
              <li className="text-neural-700 hover:bg-secondary-600 rounded-md p-2">
                <NavLink
                  to="product/edit-products"
                  className="w-full h-full font-sans tracking-wider items-center text-sm hover:text-accent-500 text-secondary-300 p-3"
                >
                  Edit Products
                </NavLink>
              </li>
              <li className="text-neural-700 hover:bg-secondary-600 p-2 rounded-md">
                <NavLink
                  to="product/add-product"
                  className="w-full h-full font-sans tracking-wider items-center text-sm hover:text-accent-500 text-secondary-300 p-3"
                >
                  Add Products
                </NavLink>
              </li>
              <li className="text-neural-700 hover:bg-secondary-600 p-2 rounded-md">
                <NavLink to="/product/expired" className="w-full h-full font-sans tracking-wider items-center text-sm hover:text-accent-500 text-secondary-300 p-3">
                  Expired
                </NavLink>
              </li>
            </ul>

            <li className="text-neural-700 hover:bg-secondary-600 rounded-md transform transition-all hover:translate-x-4">
              <NavLink
                to="/customers"
                className="w-full h-full font-sans tracking-wider flex items-center  hover:text-accent-500 p-3"
              >
                <HiUserGroup className="text-2xl" />
                <span className="text-secondary-300 pl-3">Customers</span>
              </NavLink>
            </li>

            <div className="py-6">
              <hr className="border-secondary-500" />
            </div>

            <li className="text-neural-700 hover:bg-secondary-600 rounded-md transform transition-all hover:translate-x-4">
              <NavLink
                to="/dashboard"
                className="w-full h-full font-sans tracking-wider flex items-center  hover:text-accent-500 p-3"
              >
                <IoMdLogOut className="text-2xl" />
                <span className="text-secondary-300 pl-3">Logout</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Menu;
