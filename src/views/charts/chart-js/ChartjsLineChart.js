// ** Third Party Components
import { Line } from "react-chartjs-2";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardSubtitle,
} from "reactstrap";

const ChartjsLineChart = ({
  gridLineColor,
  warningColorShade,
  lineChartDanger,
  lineChartPrimary,
}) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor,
        },
      },
      y: {
        min: 0,
        max: 400,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor,
        },
      },
    },
    plugins: {
      legend: {
        align: "start",
        position: "top",
        labels: {
          boxWidth: 10,
          marginBottom: 25,

          usePointStyle: true,
        },
      },
    },
  };

  // ** Chart Data
  const data = {
    labels: [
      "Nov",
      "Dec",
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
    ],
    datasets: [
      {
        data: [
          80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360,
          375,
        ],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: "",
        pointHoverRadius: 0,
        pointStyle: "line",
        pointHoverBorderWidth: 0,
        borderColor: "#2873B9",
        pointBorderColor: "transparent",
        backgroundColor: "transparent",
        pointHoverBackgroundColor: "transparent",
      },
    ],
  };

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20;
        };
      },
    },
  ];

  return (
    <Card className="h-100 mb-0">
      <CardHeader className="d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column">
        <div>
          <CardTitle className="mb-75 card_title" tag="h4">
            Total Numbers of Subscribers
          </CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: "304px" }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  );
};

export default ChartjsLineChart;
