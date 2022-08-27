import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {dataCharts} from "../dataCharts";

const ChartOilPlan = () => {
  return (
    <ResponsiveContainer width={"100%"} height={300}>
      <LineChart data={dataCharts}>
        <Line type="monotone" dataKey="fact" stroke="#0478b3" />
        <Line type="monotone" dataKey="plan" stroke="#656565" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ChartOilPlan;
