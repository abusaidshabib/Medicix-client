import React from "react";
import { BiGroup } from "react-icons/bi";
// import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

// const items = [
//   { icon: <FaTwitter />, text: "Follow us on Twitter" },
//   { icon: <FaFacebook />, text: "Like us on Facebook" },
//   { icon: <FaInstagram />, text: "Follow us on Instagram" },
// ];

const Card = () => {
  const Tag = <BiGroup className="text-teal-400 text-3xl" />;

  return (
    <div className="h-40 bg-secondary-700 rounded-md col-span-3 grid grid-cols-2 p-6">
      <div className="grid items-center">
        <div>
          {Tag}
          <p className="text-base text-neural-600">Total customers</p>
          <h1 className="text-lg tracking-wider font-medium text-neural-400">
            12,5000
          </h1>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="border-4 border-accent-500 rounded-full w-14 h-14 grid place-items-center">
          <p className="text-teal-400">50%</p>
        </div>
      </div>
      {/* <div>
        {items.map((item, index) => (
          <div key={index}>
            {item.icon}
            <span>{item.text}</span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Card;
