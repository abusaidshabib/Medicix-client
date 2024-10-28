import React, { useState } from "react";
import RecentSales from "../../Components/Analytics/RecentSales";
import Highsales from "../../Components/Analytics/Highsales";
import SalesReport from "../../Components/Dashboard/SalesReport";
import HighSellingBar from "../../Components/Analytics/HighSellingBar";
import { useGetHighSalesQuery, useGetInvoiceQuery, useGetSalesQuery } from "../../features/api/apiSlice";
import useTitle from "../../Hooks/UseTitle/UseTitle";

const Analytics = () => {

  useTitle("Analytics");

  const [date, setDate] = useState("2022-03");
  const [high, setHigh] = useState("2022-03");

  const salesData = useGetSalesQuery({
    year: date.slice(0, 4),
    month: date.slice(5, 7),
  });

  const highSalesData = useGetHighSalesQuery({
    year: high.slice(0, 4),
    month: high.slice(5, 7),
  });

  const recentSales = useGetInvoiceQuery();

  const handleChange = (e) => {
    setDate(e)
    salesData.refetch()
  };
  const handleHigh = (e) => {
    setHigh(e)
    highSalesData.refetch()
  };

  const today = new Date();
  // const ye = today.getFullYear();
  // const mon = ("0" + (today.getMonth() + 1)).slice(-2);

  const yearMonth = "2022-06";

  const minimum = "2022-01";
  const maximum = "2022-12";

  const data = highSalesData?.data?.data?.slice(0, 5);

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
                onChange={(e) => handleChange(e.target.value)}
                className="bg-neural-100 border-b-2 text-neural-900 outline-none p-1 indicator_input default:text-neural-900 font-medium"
                type="month"
                name=""
                id=""
                min={minimum}
                max={maximum}
                defaultValue={yearMonth}
              />
            </form>
          </div>
          <SalesReport data={salesData?.data?.data}></SalesReport>
          <div className="grid grid-cols-2 items-center pb-10">
            <div>
              <h1 className="text-accent-400 text-lg">
                Details of high selling products
              </h1>
            </div>
            <form className="text-right">
              <p className="text-neural-400 pb-4">Select your month and year</p>
              <input
                onChange={(e) => handleHigh(e.target.value)}
                className="bg-neural-100 border-b-2 text-neural-900 outline-none p-1 indicator_input default:text-neural-900 font-medium"
                type="month"
                name=""
                id=""
                min={minimum}
                max={maximum}
                defaultValue={yearMonth}
              />
            </form>
          </div>
          <HighSellingBar data={data}></HighSellingBar>
        </div>
        <div className="bg-secondary-700 col-span-4 rounded-md p-6">
          <h1 className="text-accent-400 text-lg">All recent analytics</h1>
          <p className="text-neural-400">Recent sales</p>
          <RecentSales data={recentSales?.data?.data}></RecentSales>
          <p className="text-accent-600 pt-6 text-lg">
            High selling products summary
          </p>
          {data && <Highsales data={data}></Highsales>}
        </div>
      </div>
    </div>
  );
};

export default Analytics;
