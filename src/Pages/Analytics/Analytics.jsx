import React from "react";
import RecentSales from "../../Components/Analytics/RecentSales";
import Highsales from "../../Components/Analytics/Highsales";
import SalesReport from "../../Components/Dashboard/SalesReport";
import HighSellingBar from "../../Components/Analytics/HighSellingBar";

const Analytics = () => {

  const today = new Date();
  const year = today.getFullYear();
  const month = ("0" + (today.getMonth() + 1)).slice(-2);

  const yearMonth = year + "-" + month;

  const minimum = "2020-05"

  return (
    <div className="w-full">
      <h1 className="text-neural-400 text-2xl font-semibold pb-3">
        Details Analysis
      </h1>
      <div className="grid gap-3 grid-cols-12">
        <div className="bg-secondary-700 col-span-8 rounded-md p-6">
          <div className="grid grid-cols-2 items-center pb-10">
            <div>
              <h1 className="text-accent-400 text-lg">
                Check Your monthly sales
              </h1>
            </div>
            <form className="text-right">
              <p className="text-neural-400 pb-4">Select your month and year</p>
              <input
                className="bg-teal-400 border-b-2 text-neural-800 outline-none p-1 indicator_input"
                type="month"
                name=""
                id=""
                min={minimum}
                defaultValue={yearMonth}
              />
            </form>
          </div>
          <SalesReport></SalesReport>
          <div className="grid grid-cols-2 items-center pb-10">
            <div>
              <h1 className="text-accent-400 text-lg">
                Details of high selling products
              </h1>
            </div>
            <form className="text-right">
              <p className="text-neural-400 pb-4">Select your month and year</p>
              <input
                className="bg-teal-400 border-b-2 text-neural-800 outline-none p-1 indicator_input"
                type="month"
                name=""
                id=""
                min={minimum}
                defaultValue={yearMonth}
              />
            </form>
          </div>
          <HighSellingBar></HighSellingBar>
        </div>
        <div className="bg-secondary-700 col-span-4 rounded-md p-6">
          <h1 className="text-accent-400 text-lg">All recent analytics</h1>
          <p className="text-neural-400">Recent sales</p>
          <RecentSales></RecentSales>
          <p className="text-accent-600 pt-6 text-lg">High selling product</p>
          <Highsales></Highsales>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
