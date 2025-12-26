import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChannelChart({ data }) {
  if (!data || data.length === 0) return null;

  const channels = {};
  data.forEach(d => {
    channels[d.channel] = (channels[d.channel] || 0) + 1;
  });

  return (
    <Bar
      data={{
        labels: Object.keys(channels),
        datasets: [{
          label: "APs per Channel",
          data: Object.values(channels),
          backgroundColor: "#4f46e5"
        }]
      }}
    />
  );
}
