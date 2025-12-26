import { useEffect, useState } from "react";
import { socket } from "./socket";
import ChannelChart from "./ChannelChart";
import SignalHistory from "./SignalHistory";

function App() {
  const [aps, setAps] = useState([]);
  const [status, setStatus] = useState("Connecting...");
  const [recommend, setRecommend] = useState(null);
  const [minSignal, setMinSignal] = useState(0);

  useEffect(() => {
    socket.on("connect", () => setStatus("Connected"));
    socket.on("disconnect", () => setStatus("Reconnecting..."));

    socket.on("wifi_data", data => {
      setAps(data);
      setStatus("Connected");
    });

    socket.on("channel_recommendation", data => {
      setRecommend(data);
    });

    return () => socket.off();
  }, []);

  const filtered = aps.filter(ap => ap.signal >= minSignal);

  return (
    <div style={{ padding: 20, color: "white" }}>
      <h1>Wi-Fi Dashboard</h1>
      <p>Status: <b>{status}</b></p>

      {recommend && (
        <div style={{ border: "1px solid green", padding: 10 }}>
          Best Channel Recommended: <b>{recommend.bestChannel}</b>
        </div>
      )}

      <ChannelChart data={filtered} />

      <SignalHistory data={filtered.slice(-10)} />

      <div>
        Min Signal:
        <input
          type="number"
          value={minSignal}
          onChange={e => setMinSignal(+e.target.value)}
        />
      </div>

      <table border="1" cellPadding="6">
        <thead>
          <tr>
            <th>SSID</th>
            <th>Signal</th>
            <th>Channel</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((ap, i) => (
            <tr key={i}>
              <td>{ap.ssid}</td>
              <td>{ap.signal}%</td>
              <td>{ap.channel}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
