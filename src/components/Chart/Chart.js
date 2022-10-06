import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
    const dataPointsValues = props.dataPoints.map(dataPoint => dataPoint.value); // Returns a brand new array of all the datapoints within the datapoints array
    const totalMaximum = Math.max(...dataPointsValues); // Pull out all the values in the array and add them as arguments to max method
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
