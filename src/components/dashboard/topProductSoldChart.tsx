import {
  Chart as ChartJS,
  ArcElement,
  Tooltip, 
  Legend,
} from 'chart.js';
import {Pie} from "react-chartjs-2" 

ChartJS.register(ArcElement, Tooltip, Legend); 
const dataChartTopProductSold = {
  labels: [],
  datasets: [
    {
      label: 'Sales number',
      data: [ 26,28,15,12,22,10,28,14,17,10 ],
      backgroundColor: ["#E39E03","#F6780F","#FE5326",
                        "#FB3244","#ED1868","#D5078E","#B601B3","#9106D3","#6B16EC",
                        "#472FFA","#2850FE","#1175F7","#039BE5","#01BECA","#0ADCA8",
                        "#1DF283","#3AFD5D","#5CFD3A","#82F21E","#A7DD0A","#C9BF01",
                        "#E49C03","#F77610","#FE5127","#FB3046","#EC166A","#D40690",
                        "#B401B5","#8F06D5","#6917ED","#4531FB","#2752FE","#1077F6",
                        "#039DE4" 
      ].reverse(), 
      borderWidth: 0,
    },
  ],
};
const options = {
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'top 10 products sold',
    },
  },
};
function TopProductSoldChart() {

    //data will be received by props
    //i.e. const {chartType, options, labels, dataChartSales} = props
    //this way, this component become a general  component that return a chart X (line, pie, bar....)
  return <Pie options={options} data={dataChartTopProductSold}   />;
}
 
export default TopProductSoldChart