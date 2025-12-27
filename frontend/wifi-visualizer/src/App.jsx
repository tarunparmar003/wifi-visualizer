import { useEffect, useState } from "react";
import { socket } from "./socket";
import ChannelChart from "./ChannelChart";
import SignalHistory from "./SignalHistory";

export default function App() {
  // 🔹 Nearby Wi-Fi networks
  const [aps, setAps] = useState([]);

  // 🔹 My Wi-Fi card (adapter)
  const [adapter, setAdapter] = useState(null);

  // 🔹 Optional IP address
  const [ip, setIp] = useState(null);

  const [status, setStatus] = useState("Connecting...");

  useEffect(() => {
    socket.on("connect", () => setStatus("Connected"));
    socket.on("disconnect", () => setStatus("Disconnected"));

    // 🔹 All nearby Wi-Fi
    socket.on("wifi_data", setAps);

    // 🔹 My PC Wi-Fi card info
    socket.on("wifi_adapter", setAdapter);

    // 🔹 Optional IP
    socket.on("my_ip", setIp);

    return () => socket.off();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>📡 Wi-Fi Visualizer</h1>
      <p>Status: <b>{status}</b></p>

      {/* ================= MY WIFI CARD ================= */}
      {adapter && (
        <div style={{ border: "1px solid #22c55e", padding: 12, marginBottom: 20 }}>
          <h3>🖥 My Wi-Fi Card</h3>
          <p><b>Adapter:</b> {adapter.description || adapter.name}</p>
          <p><b>MAC Address:</b> {adapter.mac}</p>
          <p><b>Status:</b> {adapter.state}</p>
          <p><b>Connected Wi-Fi:</b> {adapter.connectedSSID}</p>
          <p><b>Signal Strength:</b> {adapter.signal}</p>
          {ip && <p><b>IP Address:</b> {ip}</p>}
        </div>
      )}

      {/* ================= SUMMARY ================= */}
      <div style={{ marginBottom: 20 }}>
        <h3>Nearby Wi-Fi Summary</h3>
        <p><b>Total Wi-Fi Near Me:</b> {aps.length}</p>
      </div>

      {/* ================= CHANNEL CHART ================= */}
      <ChannelChart data={aps} />

      {/* ================= SIGNAL HISTORY ================= */}
      <SignalHistory data={aps} />

      {/* ================= WIFI TABLE ================= */}
      <h3> Nearby Wi-Fi Networks</h3>
      <table>
        <thead>
          <tr>
            <th>SSID</th>
            <th>Signal (dBm)</th>
            <th>Channel</th>
          </tr>
        </thead>
        <tbody>
          {aps.map((ap, i) => (
            <tr key={i}>
              <td>{ap.ssid}</td>
              <td>{ap.signal}</td>
              <td>{ap.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
