import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
} from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale);

export default function SignalHistory({ data }) {
  if (!data || !data.length) return null;

  return (
    <div style={{ marginBottom: 30 }}>
      <h3> Signal Strength History</h3>
      <Line
        data={{
          labels: data.map((_, i) => i + 1),
          datasets: [
            {
              label: "Signal (dBm)",
              data: data.map(d => d.signal),
              borderColor: "#38bdf8",
              tension: 0.3
            }
          ]
        }}
      />
    </div>
  );
}
