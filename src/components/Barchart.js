import React, { useState } from "react";
import Chart from "react-apexcharts";

export default function Barchart() {
  const [chartData] = useState({
    options: {
      chart: {
        id: "coffee-bar",
        background: 'transparent',
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeInOut',
          speed: 800
        }
      },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '45%',
          distributed: true
        }
      },
      states: {
        hover: {
          filter: {
            type: 'darken',
            value: 0.85
          }
        },
        active: {
          filter: {
            type: 'darken',
            value: 0.85
          }
        }
      },
      dataLabels: { enabled: false },
      xaxis: {
        categories: ["Body", "Sweetness", "Acidity", "Bitterness"],
        labels: {
          style: {
            colors: "#EEEEEE",
            fontSize: "14px",
            fontWeight: 600
          }
        },
        axisBorder: { show: false },
        axisTicks: { show: false }
      },
      yaxis: {
        labels: {
          style: {
            color: "#BBBBBB",
            fontSize: "12px",
            fontWeight: 500
          }
        }
      },
      fill: {
        opacity: 0.75
      },
      colors: ['#00c2d3', '#00b87d', '#d94c9f', '#11b9d9'], // toned-down neon palette
      grid: {
        borderColor: 'rgba(255, 255, 255, 0.05)',
        strokeDashArray: 4
      },
      tooltip: {
        theme: "dark",
        style: {
          fontSize: '13px',
          color: '#dddddd'
        },
        y: {
          formatter: (val) => `${val} pts`
        },
        fillSeriesColor: false
      },
      title: {
        text: 'Coffee Profile',
        align: 'left',
        style: {
          fontSize: '20px',
          fontWeight: '600',
          color: '#FFFFFF'
        }
      },
      legend: {
        show: false
      }
    },
    series: [
      {
        name: "Coffee Profile",
        data: [49, 60, 70, 91]
      }
    ]
  });

  return (
    <div
      className="barchart"
      style={{
        backgroundColor: '#12121b',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 0 8px rgba(0, 255, 204, 0.05)'
      }}
    >
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height="350"
      />
    </div>
  );
}


