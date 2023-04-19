import React from "react";
import { Link } from "react-router-dom";

// add overflow scroll down and up on table

const RecentInvoice = () => {
  return (
    <>
      <p className="text-base text-neural-600">Total customers</p>
      <h1 className="text-lg tracking-wider font-medium text-neural-400">
        12,5000
      </h1>

      <table className="table-auto text-base w-full text-neural-400 ">
        <tbody className="">
          <tr className="">
            <th className="py-3 font-normal text-left">
              <p>name</p>
              <p className="text-teal-400">price</p>
            </th>
            <th className="py-3 font-normal text-center">
              <p>date</p>
            </th>

            <th className="py-3 font-normal text-right">
              <Link className="no-underline px-4 py-2 bg-accent-500 uppercase text-primary-700 font-semibold tracking-wider">
                view
              </Link>
            </th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RecentInvoice;
