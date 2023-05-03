import React, { useState } from "react";
import { useGetSearchMedicineQuery } from "../../features/api/apiSlice";
import SearchProduct from "../../Components/Products/SearchProduct";
import useTitle from "../../Hooks/UseTitle/UseTitle";

const Product = () => {
  useTitle("All-Products");
  const [search, setSearch] = useState();
  const { isError, isLoading, isSuccess, data, error, isFetching, refetch } =
    useGetSearchMedicineQuery({ search });

  const handleSearch = (e) => {
    setSearch(e);
    refetch();
  };

  return (
    <div className="grid gap-3">
      <div className="w-full bg-secondary-700 rounded-md p-3 flex justify-end">
        <input
          onChange={(e) => handleSearch(e.target.value)}
          className="flex text-white p-3 text-lg bg-primary-500 outline-none rounded-md"
          type="text"
          name=""
          id=""
          placeholder="Search medicine"
        />
      </div>
      <SearchProduct isError={isError} isLoading={isLoading} isSuccess={isSuccess} data={data} error={error} isFetching={isFetching} ></SearchProduct>
    </div>
  );
};

export default Product;
