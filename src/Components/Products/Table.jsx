import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";

const Table = ({ data }) => {

  return (
    <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-6">
      <table className="table-auto text-left w-full text-neural-400 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
          <tr className="border-x-secondary-500 p-5">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Medicine Info</th>
            <th className="px-6 py-3 font-medium">Type</th>
            <th className="px-6 py-3 font-medium">Price</th>
            {/* <th className="px-6 py-3 font-medium">Delete</th>
            <th className="px-6 py-3 font-medium">Edit</th> */}
          </tr>
        </thead>
        <tbody className="">
          {data?.map((product, index) => (
            <tr key={product._id} className="border-b hover:bg-secondary-500">
              <td className="px-6 py-3 font-normal">{index + 1}</td>
              <td className="px-6 py-3 font-normal">
                <p>
                  <b>Brand Name: </b>
                  {product?.brand}
                </p>
                <p>
                  <b>Generic Name: </b>
                  {product?.generic}
                </p>
                <p>
                  <b>Use For: </b>
                  {product?.useFor}
                </p>
                <p>
                  <b>Strength: </b>
                  {product?.strength.split("/")[0]}
                </p>
                <p>
                  <b>Manufacturer: </b>
                  {product?.manufacturer}
                </p>
                <p>
                  <b>ExpireDate: </b>
                  {product?.lastdate}
                </p>
              </td>
              <td className="px-6 py-3 font-normal">{product?.description}</td>
              <td className="px-6 py-3 font-normal">{product?.price} $</td>
              {/* <td className="px-8 py-3">
                <RiDeleteBinFill className="hover:text-accent-400 text-2xl" />
              </td>
              <td className="px-8 py-3">
                <AiTwotoneEdit 
                className="hover:text-accent-400 text-2xl"/>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
