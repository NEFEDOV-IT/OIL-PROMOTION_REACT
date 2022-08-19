import React, { FC, useEffect, useState } from "react";
import { request } from "../../../utils/helpers.js";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ChartOil: FC = () => {
  const [initialData, setInitialData] = useState("");

  useEffect(() => {
    request().then((response) =>
      setInitialData(JSON.stringify(response.values))
    );
  }, [initialData]);

  return (
    <div>
      <div className={"gold__view"}>
        <h2 className="oil__charts-h2">
          Graph of oil prices on the market online
        </h2>
        {initialData && (
          <ResponsiveContainer width={"100%"} height={300}>
            <LineChart
              className="view"
              data={JSON.parse(initialData)}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="datetime" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="open"
                stroke="#8884d8"
                activeDot={{ r: 5 }}
              />
              <Line type="monotone" dataKey="close" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  );
};

export default ChartOil;
