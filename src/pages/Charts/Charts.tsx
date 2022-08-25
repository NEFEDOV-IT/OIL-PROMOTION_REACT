 import React, {FC} from "react";
import "./Charts.scss";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import ChartOil from "./ChartOil/ChartOil";

const chartsText = {
  h1: <h1 className="oil__charts-h1 root__title">Charts</h1>,
  h2: (
    <h2 className="oil__charts-h2">
      Graph of oil production for the last year
    </h2>
  ),
  text: (
    <div className="oil__charts-text">
      <p>*Oil production is indicated in tons per month.</p>
      <span className={"oil__charts-ton"}> &nbsp; - Actual production</span>
      <span className={"oil__charts-plan"}> &nbsp; - Planned production</span>
    </div>
  ),
};

const dataCharts = [
  { name: "Jan", fact: 200, plan: 100 },
  { name: "Feb.", fact: 400, plan: 300 },
  { name: "March", fact: 400, plan: 270 },
  { name: "Apr", fact: 650, plan: 490 },
  { name: "May", fact: 800, plan: 570 },
  { name: "June", fact: 850, plan: 600 },
  { name: "July", fact: 1150, plan: 800 },
  { name: "Aug.", fact: 1000, plan: 900 },
  { name: "Sep", fact: 1100, plan: 800 },
  { name: "Oct", fact: 650, plan: 300 },
  { name: "Nov", fact: 400, plan: 250 },
  { name: "Dec.", fact: 300, plan: 150 },
];

const renderLineChart = (
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

const Charts: FC = () => {
  return (
    <div className={"main"}>
      <div className="container">
        <div className="oil__charts">
          {chartsText.h1}
          {chartsText.h2}
          {renderLineChart}
          {chartsText.text}
          <ChartOil />
        </div>
      </div>
    </div>
  );
};

export default Charts;
