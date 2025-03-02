import { useEffect, useState } from 'react';

const ApexPriceChart = ({ data, height, width }) => {
  const [Chart, setChart] = useState(null);

  useEffect(() => {
    // Only import ApexCharts on the client side
    import('react-apexcharts').then((mod) => {
      setChart(() => mod.default);
    });
  }, []);

  if (!Chart) {
    return <div>Loading chart...</div>;
  }

  const chartData = {
    options: {
      chart: {
        type: 'line',
        height: height,
        width: width,
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
        width: 2
      },
      xaxis: {
        type: 'datetime',
        categories: data.map(item => item.date)
      },
      tooltip: {
        x: {
          format: 'dd MMM yyyy'
        }
      }
    },
    series: [{
      name: 'Price',
      data: data.map(item => item.price)
    }]
  };

  return (
    <Chart 
      options={chartData.options}
      series={chartData.series}
      type="line"
      height={height}
    />
  );
};

export default ApexPriceChart; 