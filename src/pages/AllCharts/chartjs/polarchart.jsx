import React from "react";
import { PolarArea } from "react-chartjs-2";
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const PolarChart = ({ dataColors }) => {
  var polarAreaChartColors = getChartColorsArray(dataColors);
  const data = {
    datasets: [
      {
        data: [11, 16, 7, 18],
        backgroundColor: polarAreaChartColors,
        label: "My dataset", // for legend
        hoverBorderColor: "#fff",
      },
    ],
    labels: ["سری 1", "سری 2", "سری 3", "سری 4"],
  };

  return <PolarArea width={734} height={269} data={data} className="chartjs-chart" />;
};

export default PolarChart;
