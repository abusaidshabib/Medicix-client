import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart } from "../../features/cart/cartSlice";
import { RiDeleteBinFill } from "react-icons/ri";

const EditInvoice = () => {
  const cart = useSelector((state) => state.cart.cart);
  const invoice = useSelector((state) => state.cart.invoice);

  console.log(invoice)

  const dispatch = useDispatch();

  const handleChange = (product) => {
    dispatch(changeQuantity(product));
  };

  return (
    <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-6">
      <table className="table-auto text-left w-full text-neural-400 ">
        <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
          <tr className="border-x-secondary-500 p-5">
            <th className="px-6 py-3 font-medium">S.N.</th>
            <th className="px-6 py-3 font-medium">Medicine Info</th>
            <th className="px-6 py-3 font-medium">quantity</th>
            <th className="px-6 py-3 font-medium">total</th>
            <th className="px-6 py-3 font-medium">action</th>
          </tr>
        </thead>
        <tbody>
          {cart?.map((product, index) => (
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
              <td className="flex items-center h-60">
                <div className="">
                  <input
                    onChange={(e) =>
                      handleChange({
                        ...product,
                        quantity: parseInt(e.target.value),
                      })
                    }
                    className="bg-primary-500 p-2 min-w-20 min-h-20 w-20 h-20 rounded-full outline-none text-xl text-center"
                    type="number"
                    name=""
                    id=""
                    min="1"
                    max={product?.totalProducts}
                    defaultValue={product?.quantity}
                  />
                </div>
              </td>
              <td className="px-6 py-3 font-normal">
                {product?.quantity * product?.price}
              </td>
              <td className="px-6 py-3 font-normal">
                <button
                  className="p-3"
                  onClick={() => dispatch(removeFromCart(product._id))}
                >
                  <RiDeleteBinFill className="hover:text-accent-400 text-2xl" />
                </button>
              </td>
            </tr>
          ))}
          <tr className="border-b">
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal">Sub Total</td>
            <td className="px-12 py-3">{invoice?.subTotal}</td>
            <td className="px-6 py-3 font-normal"></td>
          </tr>
          <tr>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal"></td>
            <td className="px-6 py-3 font-normal">
              <b>Total</b>
            </td>
            <td className="px-12 py-3">{invoice?.total}</td>
            <td className="px-6 py-3 font-normal"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EditInvoice;
