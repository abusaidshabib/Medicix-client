import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const HighSellingBar = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height={500}>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="quantity" fill="#ff95cc" />
        <Bar dataKey="revenue" fill="#fff" />
        <Bar dataKey="totalsales" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HighSellingBar;
