import React from "react";

export const chartsText = {
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