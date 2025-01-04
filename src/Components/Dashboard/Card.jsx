import React from "react";

const Card = ({ length, title, icon, percentage }) => {
  return (
    <div className="h-40 bg-secondary-700 rounded-md col-span-3 grid grid-cols-2 p-6">
      <div className="grid items-center">
        <div>
          {icon}
          <p className="text-base text-neural-600">{title}</p>
          <h1 className="text-lg tracking-wider font-medium text-neural-400">
            {length}
          </h1>
        </div>
      </div>
      <div className="flex justify-end items-center">
        <div className="border-4 border-accent-500 rounded-full w-14 h-14 grid place-items-center">
          <p className="text-teal-400">{percentage}%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
