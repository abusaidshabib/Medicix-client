import React from 'react';
import { Link } from 'react-router-dom';

const Action = () => {
  return (
    <div className="grid grid-cols-12 gap-3">
      <Link
        to="/product/add-product"
        className="h-28 flex items-center justify-center bg-secondary-700 rounded-md text-2xl col-span-4 text-neural-400 uppercase tracking-wider hover:bg-accent-700"
      >
        Add Medicine
      </Link>
      <Link
        to="/invoice"
        className="h-28 flex items-center justify-center bg-secondary-700 rounded-md text-2xl col-span-4 text-neural-400 uppercase tracking-wider hover:bg-accent-700"
      >
        Create Invoice
      </Link>
      <Link
        to=""
        className="h-28 flex items-center justify-center bg-secondary-700 rounded-md text-2xl col-span-4 text-neural-400 uppercase tracking-wider hover:bg-accent-700"
      >
        Customers
      </Link>
    </div>
  );
};

export default Action;