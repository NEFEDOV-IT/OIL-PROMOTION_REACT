import React, { FC } from "react";
import "./Charts.scss";
import ChartOil from "./ChartOil/ChartOil";
import ChartOilPlan from "./ChartOilPlan/ChartOilPlan";
import { chartsText } from "./chartsText";

const Charts: FC = () => {
  return (
    <div className={"main"}>
      <div className="container">
        <div className="oil__charts">
          {chartsText.h1}
          {chartsText.h2}
          <ChartOilPlan />
          {chartsText.text}
          <ChartOil />
        </div>
      </div>
    </div>
  );
};

export default Charts;
