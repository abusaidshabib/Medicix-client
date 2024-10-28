import React from "react";
import { useSelector } from "react-redux";

const InvoiceTable = () => {
  const cart = useSelector((state) => state.cart.cart);
  const invoice = useSelector((state) => state.cart.invoice);

  return (
    <div className="relative overflow-x-auto w-full rounded-md p-6">
      <table className="table-auto text-left w-full text-neural-900 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase">
          <tr className="border-b p-5">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Medicine Info</th>
            <th className="px-6 py-3 font-medium">Price</th>
            <th className="px-6 py-3 font-medium">Qty</th>
            <th className="px-6 py-3 font-medium">Total</th>
          </tr>
        </thead>
        <tbody className="">
          {cart?.map((product, index) => (
            <tr key={index} className="border-b">
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
                  {product?.strength}
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
              <td className="px-6 py-3 font-normal">{product?.price} $</td>
              <td className="px-6 py-3 font-normal">{product?.quantity}</td>
              <td className="px-12 py-3">{product?.subTotal}</td>
            </tr>
          ))}
          <tr className="border-b">
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal">Sub Total</td>
            <td className="px-12 py-3">{invoice?.subTotal}</td>
          </tr>
          <tr>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal">
              <b>Total</b>
            </td>
            <td className="px-12 py-3">{invoice?.total}</td>
          </tr>
        </tbody>
      </table>
      <div className="text-center pt-6">
        <div className="flex justify-end items-center pt-10">
          <p className="py-3">
            Owner signature: <span className="px-20"></span>
          </p>
        </div>
        <p className="border-t pt-3">
          If you have any question please contact: medicix@gmail.com
        </p>
      </div>
      <p className="font-cursive text-center pt-6 text-5xl text-accent-600">
        Thank You
      </p>
    </div>
  );
};

export default InvoiceTable;
