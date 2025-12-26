import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

export default function SignalHistory({ data = [] }) {
  if (data.length === 0) return null;

  const labels = data.map((_, i) => i + 1);
  const values = data.map(d => d.signal);

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Signal Strength (%)",
            data: values,
            borderColor: "cyan",
            tension: 0.3
          }
        ]
      }}
    />
  );
}
