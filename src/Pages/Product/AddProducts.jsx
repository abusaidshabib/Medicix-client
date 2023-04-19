import React from "react";

const AddProducts = () => {
  return (
    <div className="bg-secondary-700 rounded-md p-10">
      <h1 className="text-4xl uppercase font-semibold text-center text-accent-400">
        Add Products
      </h1>
      <form action="" className="text-neural-700h py-10 w-full">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-8 w-full">
            <div className="pt-5 w-full">
              <label className="text-neural-400 text-lg">
                Enter Brand Name
              </label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">
                Enter Generic Name
              </label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">Enter Strength</label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">
                Enter Description
              </label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">
                Manufacturer Company
              </label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="pt-5">
              <label className="text-neural-400 text-lg">Enter Price</label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">Use For</label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
            <div className="pt-5">
              <label className="text-neural-400 text-lg">DAR</label>
              <br />
              <input
                className="back-trans outline-none pt-5 text-lg text-neural-400 border-b border-accent-500 w-full"
                type="text"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
        <div className="pt-16 w-full">
          <input
            className="w-full bg-accent-500 text-primary-800 py-3 text-lg rounded-md uppercase font-semibold tracking-wider hover:text-neural-500 hover:bg-primary-700"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProducts;