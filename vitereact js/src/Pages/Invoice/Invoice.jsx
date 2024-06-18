import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { BiDownload } from "react-icons/bi";
import InvoicePaper from "../../Components/Invoice/InvoicePaper";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import useTitle from "../../Hooks/UseTitle/UseTitle";

const Invoice = () => {
  useTitle("Invoice");
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "emp-data",
  });

  const invoice = useSelector((state) => state.cart.invoice);

  const handleSend = () => {
    handlePrint();
    fetch("https://medicix-backend.vercel.app/invoice/post", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(invoice),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Invoice Saved on database");
        } else {
          toast.error(data.message);
        }
      })
      .catch((err) => console.err(err));
  };

  return (
    <>
      <div
        className="flex justify-end items-center cursor-pointer"
        onClick={handleSend}
      >
        <p className="text-xl text-neural-400">Download Invoice</p>
        <div className="px-3"></div>
        <BiDownload className="text-4xl rounded-md text-accent-500 bg-secondary-600 p-2" />
      </div>
      <div className="py-3"></div>
      <div
        ref={componentRef}
        style={{ width: "100%", height: window.innerHeight }}
      >
        <InvoicePaper></InvoicePaper>
      </div>
    </>
  );
};

export default Invoice;
