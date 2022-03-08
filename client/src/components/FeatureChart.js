import { useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    y: { grid: { color: "rgba(255, 255, 255, 0.3)" } },
    x: { grid: { color: "rgba(255, 255, 255, 0.3)" } },
  },
  plugins: {
    title: {
      display: true,
      text: "Audio Features",
      font: {
        size: 18,
      },
      color: "#ffffff",
      padding: 30,
    },
    legend: {
      display: false,
    },
  },
};

const labels = [
  "acousticness",
  "danceability",
  "energy",
  "instrumentalness",
  "liveness",
  "speechiness",
  "valence",
];

export default function FeatureChart({ audioFeaturesData }) {
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: labels.map((feature, index) => audioFeaturesData[index]),
        backgroundColor: [
          "rgba(255, 99, 132, 0.3)",
          "rgba(255, 159, 64, 0.3)",
          "rgba(255, 206, 86, 0.3)",
          "rgba(75, 192, 192, 0.3)",
          "rgba(54, 162, 235, 0.3)",
          "rgba(104, 132, 245, 0.3)",
          "rgba(153, 102, 255, 0.3)",
        ],
        borderColor: [
          "rgba(255,99,132,1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(104, 132, 245, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
