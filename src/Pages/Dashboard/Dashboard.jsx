import React from "react";
import Card from "../../Components/Dashboard/Card";
import SalesReport from "../../Components/Dashboard/SalesReport";
import RecentInvoice from "../../Components/Dashboard/RecentInvoice";
import Action from "../../Components/Dashboard/Action";
const Dashboard = () => {
  // card --Total Customer, Customer Review, Out Of stock, Expired, Total Invoice or transaction, Total Manufacturer

  return (
    <div className="w-full">
      <h1 className="text-neural-400 text-2xl font-semibold">DASHBOARD</h1>
      <p className="text-neural-700 text-base">Welcome to your dashboard</p>

      {/* First Section */}
      <div className="grid gap-3 grid-cols-12 py-3">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>

      {/* second Section */}
      <div className="grid grid-cols-12 gap-3">
        <div className="col-span-8 bg-secondary-700 rounded-md p-6">
          <p className="text-base text-neural-600">Sale in this Month</p>
          <h1 className="text-lg pb-6 tracking-wider font-medium text-neural-400">
            12,5000
          </h1>
          <SalesReport></SalesReport>
        </div>
        <div className="bg-secondary-700 col-span-4 rounded-md p-6">
          <RecentInvoice></RecentInvoice>
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
