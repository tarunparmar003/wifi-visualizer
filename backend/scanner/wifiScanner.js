const { exec } = require("child_process");

module.exports = function scanWiFi(cb) {
  exec("netsh wlan show networks mode=bssid", (err, stdout) => {
    if (err) return cb(err);

    const networks = [];
    let currentSSID = null;

    stdout.split("\n").forEach((line) => {
      line = line.trim();

      // SSID name
      if (line.startsWith("SSID ")) {
        currentSSID = line.split(":").slice(1).join(":").trim();
      }

      // Signal strength
      if (currentSSID && line.startsWith("Signal")) {
        const percent = parseInt(line.split(":")[1]);
        const signalDbm = Math.round(percent / 2 - 100);

        networks.push({
          ssid: currentSSID,
          signal: signalDbm,
        });
      }

      // Channel
      if (currentSSID && line.startsWith("Channel")) {
        networks[networks.length - 1].channel = parseInt(line.split(":")[1]);
        networks[networks.length - 1].time = new Date();
      }
    });

    cb(null, networks);
  });
};
