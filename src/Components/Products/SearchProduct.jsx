import React from "react";
import { useDispatch } from "react-redux";
import { changeQuantity } from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";

const SearchProduct = ({
  isFetching,
  isLoading,
  isError,
  isSuccess,
  error,
  data,
}) => {
  const dispatch = useDispatch();

  const handleChange = (product) => {
    console.log(product?.price)
    console.log(product?.quantity)
    dispatch(changeQuantity(product));
  };

  if (isLoading && isFetching) {
    return (
      <div className="flex w-full h-full items-center justify-center">
        <button
          type="button"
          className="flex items-center rounded-lg px-4 py-2 text-white"
          disabled
        >
          <svg
            className="mr-3 h-5 w-5 animate-spin text-white "
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
          <span className="font-medium"> Processing... </span>
        </button>
      </div>
    );
  }

  if (isError && error) {
    return (
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Holy smokes!</strong>
        <span className="block sm:inline">
          Something seriously bad happened.
        </span>
        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6 text-red-500"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    );
  }

  if (isSuccess && !error) {
    return (
      <div className="relative overflow-x-auto w-full bg-secondary-700 rounded-md p-6">
        <table className="table-auto text-left w-full text-neural-400 ">
          <thead className="text-base tracking-widest text-gray-700 uppercase bg-secondary-600">
            <tr className="border-x-secondary-500 p-5">
              <th className="px-6 py-3 font-medium">S.N.</th>
              <th className="px-6 py-3 font-medium">Medicine Info</th>
              <th className="px-6 py-3 font-medium">Total Products</th>
              <th className="px-6 py-3 font-medium">quantity</th>
              <th className="px-6 py-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="">
            {data?.data?.map((product, index) => (
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

                <td className="px-6 py-3 font-normal">
                  {product?.totalProducts}
                </td>
                <td className="flex items-center justify-center h-60">
                  <div className="">
                    <input
                      onChange={(e) =>
                        handleChange({ ...product, quantity: parseInt(e.target.value)})
                      }
                      className="bg-primary-500 p-2 min-w-20 min-h-20 w-20 h-20 rounded-full outline-none text-xl text-center"
                      type="number"
                      name=""
                      id=""
                      min="1"
                      max={product?.totalProducts}
                      defaultValue="1"
                    />
                  </div>
                </td>
                <td className="px-8 py-3">
                  <Link
                    to="/invoice/cart-edit"
                    className="bg-primary-900 text-accent-400 text-base uppercase tracking-widest font-semibold rounded-md py-2 px-3 hover:bg-primary-600 hover:text-white"
                  >
                    Edit Cart Products
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default SearchProduct;
