const { exec } = require("child_process");

function scanWiFi(callback) {
  exec("netsh wlan show networks mode=bssid", { encoding: "utf8" }, (err, stdout) => {
    if (err || !stdout) return callback(null, []);

    const lines = stdout.split(/\r?\n/);
    const results = [];
    let currentSSID = "Hidden Network";

    for (let line of lines) {
      line = line.trim();

      if (line.startsWith("SSID ")) {
        currentSSID = line.split(":")[1]?.trim() || "Hidden Network";
      }

      if (line.startsWith("Signal")) {
        results.push({
          ssid: currentSSID,
          signal: parseInt(line.replace(/\D/g, "")),
          channel: null
        });
      }

      if (line.startsWith("Channel") && results.length > 0) {
        results[results.length - 1].channel =
          parseInt(line.replace(/\D/g, ""));
      }
    }

    callback(null, results.filter(r => r.channel !== null));
  });
}

module.exports = scanWiFi;
