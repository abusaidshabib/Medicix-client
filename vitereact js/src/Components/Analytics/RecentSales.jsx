import React from "react";
import { Pie, PieChart, ResponsiveContainer } from "recharts";

const RecentSales = ({data}) => {
  return (
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie dataKey="total" data={data} fill="#8884d8" label />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RecentSales;