import React from "react"
import ReactApexChart from "react-apexcharts"
import getChartColorsArray from "../../../components/Common/ChartsDynamicColor";

const FunnelChart = ({dataColors}) => {
  const FunnelChartColors = getChartColorsArray(dataColors);

  const series = [
    {
      name: "سری قیف",
      data: [1380, 1100, 990, 880, 740, 548, 330, 200],
    },
  ];
  const options = {
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: "80%",
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val, opt) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    colors: FunnelChartColors,
    title: {
      text: "قیف استخدام",
      align: "middle",
    },
    xaxis: {
      categories: [
        "منبع",
        "غربال شد",
        "ارزیابی شد",
        "مصاحبه منابع انسانی",
        "فنی",
        "تأیید کنید",
        "ارایه شده",
        "استخدام شده",
      ],
    },
    legend: {
      show: false,
    },
  };

  return (
    <ReactApexChart options={options} series={series} type="bar" height="390" />
  )
}

export default FunnelChart
