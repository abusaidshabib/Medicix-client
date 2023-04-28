import React from "react";
import InvoiceTable from "./InvoiceTable";
import { useSelector } from "react-redux";

const InvoicePaper = () => {

  const invoice = useSelector((state) => state.cart.invoice)

  return (
    <div className="bg-white rounded-md p-6">
      <p className="text-accent-600 tracking-wider text-2xl font-cursive text-center">
        Medic-ix
      </p>
      <h1 className="text-center text-4xl uppercase tracking-wider font-medium pb-4">
        invoice
      </h1>
      <p className="text-center py-4">
        [please note: check the expire date and payment clearly.{" "}
        <b>Before leaving pharmacy</b>]
      </p>
      <div className="flex justify-between align-middle py-6">
        <div className="tracking-wider text-lg">
          <h1 className="text-xl text-accent-600">Pharmacy Info</h1>
          <p>
            <b>Invoice Id:</b> Mongodb Id
          </p>
          <p>
            <b>Address: </b> 123, Anywhere St, Any City
          </p>
          <p>
            <b>Contact Info: </b>
            +01234567891
          </p>
          <p>
            <b>Email Address: </b> medicix@gmail.com
          </p>
        </div>
        <div className="tracking-wider text-lg">
          <h1 className="text-xl text-accent-600">Client Info</h1>
          <p>
            <b>Issue Date: </b> {invoice?.date}
          </p>
          <p>
            <b>Client Name: </b> {invoice?.name}
          </p>
          <p>
            <b>Address: </b> {invoice?.address}
          </p>
          <p>
            <b>Contact Info: </b>
            {invoice?.phone}
          </p>
          <p>
            <b>Email Address: </b> {invoice?.email}
          </p>
        </div>
      </div>
      <InvoiceTable></InvoiceTable>
    </div>
  );
};

export default InvoicePaper;
