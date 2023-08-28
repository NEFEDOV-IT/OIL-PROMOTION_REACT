import React, { FC } from "react";
import "./Charts.scss";
import ChartOil from "./ChartOil/ChartOil";
import ChartOilPlan from "./ChartOilPlan/ChartOilPlan";
import Page from "../../components/Page/Page";

const Charts: FC = () => {
  return (
    <Page
      title={'Charts'}
      titleClass={'oil__charts-h1'}
    >
      <div className="oil__charts">
        <h2 className="oil__charts-h2">
          Graph of oil production for the last year
        </h2>
        <ChartOilPlan />
        <div className="oil__charts-text">
          <p>*Oil production is indicated in tons per month.</p>
          <span className={"oil__charts-ton"}> &nbsp; - Actual production</span>
          <span className={"oil__charts-plan"}> &nbsp; - Planned production</span>
        </div>
        <ChartOil />
      </div>
    </Page>
  );
};

export default Charts;
