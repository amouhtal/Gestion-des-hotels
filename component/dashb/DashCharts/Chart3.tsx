import dynamic from "next/dynamic";
import React from "react";
// import ReactApexChart from "react-apexcharts";
import styles from "./charts.module.css";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

class ApexChart extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [42, 47, 52, 58, 65],
      options: {
        chart: {
          height: 350,
          width: 380,
          type: "polarArea",
        },
        labels: ["Rose A", "Rose B", "Rose C", "Rose D", "Rose E"],
        fill: {
          opacity: 1,
        },
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        legend: {
          position: "bottom",
        },

        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },

        theme: {
          monochrome: {
            enabled: true,
            shadeTo: "light",
            shadeIntensity: 0.6,
          },
        },
      },
    };
  }

  render() {
    return (
      <div className={styles.chart2}>
        {typeof window !== "undefined" && (
          <ReactApexChart
            options={this.state.options}
            series={this.state.series}
            type="polarArea"
            height={300}
          />
        )}
      </div>
    );
  }
}

export default ApexChart;
