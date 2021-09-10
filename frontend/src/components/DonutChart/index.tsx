import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'Types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = {
  labels: string[];
  series: number[];
}
const DonutChart = () => {

  const [chartdata, setChartdata] = useState<ChartData>({ labels: [], series: [] });
  useEffect(() => {
    axios.get(`${BASE_URL}/sales/amount-by-seller`)
      .then(r => {
        const data = r.data as SaleSum[];
        const myLabels = data.map(x => x.sellerName);
        const mySeries = data.map(x => x.sum);
        setChartdata({ labels: myLabels, series: mySeries });
      })
  }, []);

  // const mockData = {
  //   series: [477138, 499928, 444867, 220426, 473088],
  //   labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
  // }

  const options = {
    legend: {
      show: true
    }
  }
  return (
    <Chart
      options={{ ...options, labels: chartdata.labels }}
      series={chartdata.series}
      type="donut"
      height="240"
    />
  );
}

export default DonutChart;
