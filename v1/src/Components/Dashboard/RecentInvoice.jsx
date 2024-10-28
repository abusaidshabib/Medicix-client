import React from "react";
import { Link } from "react-router-dom";

// add overflow scroll down and up on table

const RecentInvoice = ({ invoice }) => {
  return (
      <div>
        <p className="text-base text-neural-600">Recent Sales</p>

        <table className="table-auto text-base w-full text-neural-400 ">
          <tbody className="">
            {invoice?.slice(0, 3).map((data) => (
              <tr key={data?._id} className="">
                <th className="py-3 font-normal text-left">
                  <p>
                    <b>Name: </b>
                    {data?.name}
                  </p>
                  <p className="text-teal-400">
                    <b>Price:</b> {data?.total}
                  </p>
                  <p>
                    <b>Date: </b>
                    {data?.date}
                  </p>
                </th>
                <th className="py-3 font-normal text-right">
                  {/* <Link className="no-underline px-4 py-2 bg-accent-500 uppercase text-primary-700 font-semibold tracking-wider">
                    view
                  </Link> */}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
};

export default RecentInvoice;
