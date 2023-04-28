import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createInvoice } from "../../features/cart/cartSlice";

const UserForm = () => {
  const today = new Date();
  const day = today.getDate().toString().padStart(2, "0");
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const year = today.getFullYear().toString();
  const formattedDate = `${day}-${month}-${year}`;

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const address = form.address.value;
    const discount = form.discount.value;
    const date = formattedDate;

    const data = {
      date,
      name,
      phone,
      email,
      address,
      discount,
      formattedDate,
      subTotal: 0,
      total: 0,
      products: [],
    };
    dispatch(createInvoice(data));
  };

  return (
    <div className="bg-secondary-700 rounded-md mb-3">
      <div className="p-6">
        <div className="text-right text-white text-lg">
          <p className="">Date: {formattedDate}</p>
        </div>
        <form onSubmit={handleSubmit} className="pt-10 grid grid-cols-12 gap-6">
          <input
            className="col-span-6 flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
            type="text"
            id="name"
            name="name"
            placeholder="Enter Customer Name"
          />
          <input
            className="col-span-6 flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
            type="number"
            id="phone"
            name="phone"
            placeholder="Customer Phone Number"
          />
          <input
            className="col-span-6 flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
            type="email"
            id="email"
            name="email"
            placeholder="Customer Email Address"
          />
          <input
            className="col-span-6 flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
            type="text"
            id="address"
            name="address"
            placeholder="Customer Address"
          />
          <input
            className="col-span-6 flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
            type="number"
            id="discount"
            name="discount"
            placeholder="Enter discount"
            defaultValue="0"
            min="0"
          />
          <input
            className="col-span-6 bg-primary-900 text-white rounded-md text-lg tracking-wider uppercase hover:bg-accent-600"
            type="submit"
            value="create invoice after changes"
          />
        </form>
      </div>
    </div>
  );
};

export default UserForm;
