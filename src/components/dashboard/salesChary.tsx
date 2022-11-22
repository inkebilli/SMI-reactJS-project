import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line} from "react-chartjs-2" 

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'sales statistics',
    },
  },
};

const labels = ["0","2","4","6","8","10","12","14","16","18","20","22","24","26","28","30","32"];

const dataChartSales = {
  labels,
  datasets: [{ 
        data: [0,0,1800,2400,1450,600,820,1110,1122,1400,160,18,2000,220,2400,26,28,3010,3200],
        label: "This month",
        backgroundColor: "rgba(53, 162, 235, 0.5)", 
        fill: true
      }, { 
        data: [0,0,0,2,4,6,8,10,12,1405,1650,18,20,4522,2504,3826,3826,3980],
        label: "Previous month",
        backgroundColor: "rgba(53, 162, 235, 0.8)",
        fill: true
      }]
};

function SalesChart() {

    //data will be received by props
    //i.e. const {chartType, options, labels, dataChartSales} = props
    //this way, this component become a general  component that return a chart X (line, pie, bar....)
  return <Line options={options} data={dataChartSales}   />;
}
 
export default SalesChart