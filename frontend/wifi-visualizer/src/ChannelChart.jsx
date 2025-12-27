import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChannelChart({ data }) {
  if (!data || !data.length) return null;

  const counts = {};
  data.forEach(d => {
    counts[d.channel] = (counts[d.channel] || 0) + 1;
  });

  const labels = Object.keys(counts).sort((a, b) => a - b);

  return (
    <div style={{ marginBottom: 30 }}>
      <h3> Wi-Fi Networks per Channel</h3>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "Nearby Wi-Fi Count",
              data: labels.map(l => counts[l]),
              backgroundColor: "#22c55e"
            }
          ]
        }}
        options={{
          responsive: true,
          scales: {
            y: { beginAtZero: true }
          }
        }}
      />
    </div>
  );
}
