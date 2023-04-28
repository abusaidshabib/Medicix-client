import React from 'react';
import { useGetMembersQuery } from '../../features/api/apiSlice';
import { RiDeleteBinFill } from 'react-icons/ri';
import { AiTwotoneEdit } from 'react-icons/ai';
import useTitle from '../../Hooks/UseTitle/UseTitle';

const Customer = () => {

  useTitle("Customers");

  const {isError, isFetching, data, isLoading, isSuccess } = useGetMembersQuery();
  console.log(data?.data)

  return (
    <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-6">
      <table className="table-auto text-left w-full text-neural-400 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
          <tr className="border-x-secondary-500 p-5">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Customer Info</th>
            <th className="px-6 py-3 font-medium">Phone</th>
            <th className="px-6 py-3 font-medium">Email</th>
          </tr>
        </thead>
        <tbody className="">
          {data?.data?.map((member, index) => (
            <tr key={member._id} className="border-b hover:bg-secondary-500">
              <td className="px-6 py-3 font-normal">{index + 1}</td>
              <td className="px-6 py-3 font-normal">
                <p>
                  {member?.name}
                </p>
              </td>
              <td className="px-6 py-3 font-normal">{member?.phone}</td>
              <td className="px-6 py-3 font-normal">{member?.email} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;