import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ arrData }) => {
  const formatData = (itemCondition, ifCondition, elem) => arrData.reduce((acc, cur) => ((cur[itemCondition] === ifCondition) ? [...acc, cur[elem]] : acc), []);

  return (
    <div>
      <Line
        data={{
          type: 'line',
          labels: formatData(1, 2, 0),
          datasets: [{
            label: 'Mean maximum temperature',
            data: formatData(1, 2, 2),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Mean minimum temperature',
            data: formatData(1, 2, 3),
            backgroundColor: [
              'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Days of air frost',
            data: formatData(1, 2, 4),
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Total rainfall',
            data: formatData(1, 2, 5),
            backgroundColor: [
              'rgba(153, 102, 255, 0.2)',
            ],
            borderColor: [
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Total sunshine duration ',
            data: formatData(1, 2, 6),
            backgroundColor: [
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          }],
          options: {
            spanGaps: true,
          },
        }}
      />
    </div>
  );
};

export default Chart;
