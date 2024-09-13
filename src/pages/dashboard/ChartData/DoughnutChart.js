import React, { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const formatNumber = (number) => {
  let formattedNumber = "";

  if (number >= 1000000) {
    formattedNumber = (number / 1000000).toFixed(1) + "m";
  } else if (number >= 10000) {
    formattedNumber = (number / 1000).toFixed(1) + "k";
  } else {
    formattedNumber = number.toString();
  }

  return formattedNumber;
};

const DoughnutChart = () => {
  const dataValues = [9161, 7496, 21220, 15393, 5940, 8245];
  const total = dataValues.reduce((acc, cur) => acc + cur, 0);
  const [centerText, setCenterText] = useState(formatNumber(total)); 
  const [centerLabel, setCenterLabel] = useState('Total Members'); 

  const data = {
    labels: ['Mushin', 'Ipaja', 'Dopemu', 'Oshodi', 'Alagbado', 'Sango'],
    datasets: [
      {
        data: dataValues,
        backgroundColor: ['#C6CFE1', '#7193D7', '#2D56A8', '#B5D7C9', '#18B877', '#037748'],
        hoverBackgroundColor: ['#C6CFE1', '#7193D7', '#2D56A8', '#B5D7C9', '#18B877', '#037748'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            let value = context.raw || 0;
            let percentage = Math.round((value / total) * 100) + '%';
            return `${label}: ${percentage}`;
          },
        },
      },
      legend: {
        display: false,
      },
      center: {
        display: true,
        text: centerText,
        textLabel: centerLabel,
        color: '#000',
        font: {
          sizeLabel: '12px',
          sizeValue: '24px',
          weightLabel: 'normal',
          weightValue: 'bold',
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    events: ['mousemove', 'mouseout'], 
    onHover: (event, chartElement) => {
      if (chartElement.length) {
        const index = chartElement[0].index;
        const value = dataValues[index];
        setCenterText(`${formatNumber(value)}`);
        setCenterLabel('Members');
      } else {
        setCenterText(formatNumber(total)); 
        setCenterLabel('Total Members');
      }
    },
  };

  const centerTextPlugin = {
    id: 'centerTextPlugin',
    beforeDraw: (chart) => {
      const { ctx, chartArea, config } = chart;
      const { width, height } = chartArea;
      const { text, textLabel, color, font } = config.options.plugins.center;

      ctx.save();

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      const lines = text.split('\n');

      ctx.font = `${font.weightValue} ${font.sizeValue} Inter`;
      ctx.fillStyle = color;
      const textValueHeight = parseInt(font.sizeValue, 10) * 1.2;
      ctx.fillText(lines[0], width / 2, height / 2 - textValueHeight / 2);

      ctx.font = `${font.weightLabel} ${font.sizeLabel} Inter`;
      const textLabelHeight = parseInt(font.sizeLabel, 10) * 1.2;
      ctx.fillText(textLabel, width / 2, height / 2 + textLabelHeight / 2);

      ctx.restore();
    },
  };

  ChartJS.register(centerTextPlugin);

  return (
    <div className="w-[200px] h-[200px] flex items-center justify-center">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
