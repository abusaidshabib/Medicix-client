import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const Highsales = ({data}) => {

  return (
    <div>
      <h4 className="text-neural-500">Total Sales</h4>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          width={400}
          height={150}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="generic" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="totalsales"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </LineChart>
      </ResponsiveContainer>
      <h4 className="text-neural-500">Revenue</h4>
      <ResponsiveContainer width="100%" height={150}>
        <LineChart
          width={400}
          height={150}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="generic" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
          <Brush />
        </LineChart>
      </ResponsiveContainer>
      <h4 className="text-neural-500">Quantity</h4>
      <ResponsiveContainer width="100%" height={150}>
        <AreaChart
          width={300}
          height={150}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="generic" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="quantity"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Highsales;
