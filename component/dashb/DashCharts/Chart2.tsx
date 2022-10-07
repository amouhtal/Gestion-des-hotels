const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import dynamic from "next/dynamic";
import styles from './charts.module.css'

export default function SampleLine(props: any) {
  const series = [
    {
      name: "Company1",
      data: [100, 200, 232, 132, 422, 92, 403, 32, 152],
    },
  ];
  const options = {
    chart: {
      foreColor: '#fff',
      fontFamily: ' sans-serif',
      toolbar: {
        show: false,
      },
      
      background: "linear-gradient(60deg, #26c6da, #00acc1)",
    },
    fill: {
      colors: ['#fff']
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
      borderColor: "#000",
      strokeDashArray: 0,
      // position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
      row: {
        colors: ["transparent", "#9e9e9e", ], // takes an array which will be repeated on columns
        opacity: 0.001,
      },
      padding: {
        top: 0,
        right: 15,
        bottom: 0,
        left: 15,
      },
      column: {
        colors: undefined,
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },

    plotOptions: {
      bar: {
        borderRadius: 3,
        columnWidth: "60%",
        distributed: false,
        rangeBarOverlap: true,
        rangeBarGroupRows: true,
      },
    },
  };

  return (
    <div className={styles.chart1}>
      <Chart
        options={options}
        type="bar"
        series={series}
        height="100%"
        width="100%"
      />
      <h4 >{props.text}</h4>
    </div>
  );
}
