import React from "react";
import Card from "../../Components/Dashboard/Card";
import SalesReport from "../../Components/Dashboard/SalesReport";
import RecentInvoice from "../../Components/Dashboard/RecentInvoice";
import Action from "../../Components/Dashboard/Action";
import {
  useGetExpiredMedicinesQuery,
  useGetInvoiceQuery,
  useGetMedicinesQuery,
  useGetMembersQuery,
  useGetSalesQuery,
  useGetUnStocksQuery,
} from "../../features/api/apiSlice";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { FcExpired } from "react-icons/fc";
import { AiOutlineStock } from "react-icons/ai";
import { BiGroup } from "react-icons/bi";
import useTitle from "../../Hooks/UseTitle/UseTitle";

const Dashboard = () => {

  useTitle("Dashboard");

  // card --Total Customer, Customer Review, Out Of stock, Expired, Total Invoice or transaction, Total Manufacturer

  function Data(process) {
    const { data, isLoading, isSuccess, isError, isFetching } = process();

    return {
      length: data?.length,
      isLoading,
      isSuccess,
      isError,
      isFetching,
    };
  }

  const year = "2022";
  const month = "02";

  const products = Data(useGetMedicinesQuery);
  const exProduct = Data(useGetExpiredMedicinesQuery);
  const stockProduct = Data(useGetUnStocksQuery);
  const members = Data(useGetMembersQuery);
  const salesData = useGetSalesQuery({ year, month });
  const allInvoice = useGetInvoiceQuery();

  const staticData = {
    title1: "Total medicine",
    icons1: (
      <MdOutlineProductionQuantityLimits className="text-teal-400 text-3xl" />
    ),
    percentage1: Math.round(
      ((parseInt(products?.length) - parseInt(exProduct?.length)) * 100) /
        parseInt(products?.length)
    ),
    title2: "Expired medicine",
    icons2: <FcExpired className="text-teal-400 text-3xl" />,
    percentage2: Math.round(
      (parseInt(exProduct?.length) * 100) / parseInt(products?.length)
    ),
    title3: "Out of stock soon",
    icons3: <AiOutlineStock className="text-teal-400 text-3xl" />,
    percentage3:
      (parseInt(stockProduct?.length) * 100) / parseInt(products?.length),
    title4: "Total customers",
    icons4: <BiGroup className="text-teal-400 text-3xl" />,
    percentage4: members?.length,
  };

  let totalPrice = 0;

  for (let i = 0; i < salesData?.data?.data.length; i++) {
    totalPrice += salesData?.data?.data[i].price;
  }

  return (
    <div className="w-full">
      <h1 className="text-neural-400 text-2xl font-semibold">DASHBOARD</h1>
      <p className="text-neural-700 text-base">Welcome to your dashboard</p>

      {/* First Section */}
      <div className="grid gap-3 grid-cols-12 py-3">
        {products?.isLoading && products?.isFetching ? (
          <div className="flex w-full h-full items-center justify-center">
            <button
              type="button"
              className="flex items-center rounded-lg px-4 py-2 text-white"
              disabled
            >
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-medium"> Processing... </span>
            </button>
          </div>
        ) : products?.isSuccess ? (
          <Card
            length={products?.length}
            title={staticData.title1}
            icon={staticData.icons1}
            percentage={staticData?.percentage1}
          ></Card>
        ) : (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}

        {exProduct?.isLoading && exProduct?.isFetching ? (
          <div className="flex w-full h-full items-center justify-center">
            <button
              type="button"
              className="flex items-center rounded-lg px-4 py-2 text-white"
              disabled
            >
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-medium"> Processing... </span>
            </button>
          </div>
        ) : exProduct?.isSuccess ? (
          <Card
            length={exProduct?.length}
            title={staticData.title2}
            icon={staticData.icons2}
            percentage={staticData?.percentage2}
          ></Card>
        ) : (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}

        {stockProduct?.isLoading && stockProduct?.isFetching ? (
          <div className="flex w-full h-full items-center justify-center">
            <button
              type="button"
              className="flex items-center rounded-lg px-4 py-2 text-white"
              disabled
            >
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-medium"> Processing... </span>
            </button>
          </div>
        ) : stockProduct?.isSuccess ? (
          <Card
            length={stockProduct?.length}
            title={staticData.title3}
            icon={staticData.icons3}
            percentage={staticData?.percentage3.toFixed(2)}
          ></Card>
        ) : (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}

        {members?.isLoading && members?.isFetching ? (
          <div className="flex w-full h-full items-center justify-center">
            <button
              type="button"
              className="flex items-center rounded-lg px-4 py-2 text-white"
              disabled
            >
              <svg
                className="mr-3 h-5 w-5 animate-spin text-white "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              <span className="font-medium"> Processing... </span>
            </button>
          </div>
        ) : members?.isSuccess ? (
          <Card
            length={members?.length}
            title={staticData.title4}
            icon={staticData.icons4}
            percentage={staticData?.percentage4}
          ></Card>
        ) : (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
            role="alert"
          >
            <strong className="font-bold">Holy smokes!</strong>
            <span className="block sm:inline">
              Something seriously bad happened.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-red-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          </div>
        )}
      </div>

      {/* second Section */}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 bg-secondary-700 rounded-md p-6">
          <p className="text-base text-neural-600">Sale in this Month</p>
          <h1 className="text-lg pb-6 tracking-wider font-medium text-neural-400">
            TotalSales: {totalPrice}$
          </h1>
          <SalesReport data={salesData?.data?.data}></SalesReport>
        </div>
        <div className="bg-secondary-700 col-span-4 rounded-md p-6">
          <RecentInvoice invoice={allInvoice?.data?.data}></RecentInvoice>
        </div>
      </div>

      {/* Third Section */}
      <div className="w-full h-full mt-3">
        <h1 className="text-xl tracking-wider font-medium text-teal-400">
          Actions
        </h1>
        <p className="text-neural-700 pb-3 text-base">
          Go to important page using this actions
        </p>
        <Action></Action>
      </div>
    </div>
  );
};

export default Dashboard;
