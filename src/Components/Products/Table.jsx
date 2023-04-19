import React from "react";
import { RiDeleteBinFill } from "react-icons/ri";
import { AiTwotoneEdit } from "react-icons/ai";

const Table = () => {

  let string1 = "10 mg\/5ml";
  let string2 = "20mg + 50 mg/7ml";
  let newString1 = string1.split("/")[0];
  let newString2 = string2.split("/")[0];

  return (
    <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-6">
      <table className="table-auto text-left w-full text-neural-400 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
          <tr className="border-x-secondary-500 p-5">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Medicine Info</th>
            <th className="px-6 py-3 font-medium">Type</th>
            <th className="px-6 py-3 font-medium">Price</th>
            <th className="px-6 py-3 font-medium">Delete</th>
            <th className="px-6 py-3 font-medium">Edit</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b hover:bg-secondary-500">
            <td className="px-6 py-3 font-normal">1</td>
            <td className="px-6 py-3 font-normal">
              <p>
                <b>Brand Name: </b>
                Jefrin
              </p>
              <p>
                <b>Generic Name: </b>
                Ferrous Sulphate
              </p>
              <p>
                <b>Use For: </b>
                Human
              </p>
              <p>
                <b>Strength: </b>
                {newString1}
              </p>
              <p>
                <b>Manufacturer: </b>
                {newString1}
              </p>
              <p>
                <b>ExpireDate: </b>
                {newString1}
              </p>
            </td>
            <td className="px-6 py-3 font-normal">Capsule</td>
            <td className="px-6 py-3 font-normal">3.00 Tk</td>
            <td className="px-12 py-3">
              <RiDeleteBinFill />
            </td>
            <td className="px-8 py-3 font-normal">
              <AiTwotoneEdit />
            </td>
          </tr>
          <tr className="border-b hover:bg-secondary-500">
            <td className="px-6 py-3 font-normal">2</td>
            <td className="px-6 py-3 font-normal">Amoxicillin</td>
            <td className="px-6 py-3 font-normal">Capsule</td>
            <td className="px-6 py-3 font-normal">3.00 Tk</td>
            <td className="px-12 py-3 font-normal">
              <RiDeleteBinFill />
            </td>
            <td className="px-8 py-3 font-normal">
              <AiTwotoneEdit />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
