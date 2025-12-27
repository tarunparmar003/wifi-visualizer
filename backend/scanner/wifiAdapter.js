const { exec } = require("child_process");

module.exports = function getWifiAdapter(cb) {
  exec("netsh wlan show interfaces", (err, stdout) => {
    if (err) return cb(err);

    const info = {};
    stdout.split("\n").forEach((line) => {
      line = line.trim();
      if (line.startsWith("Name")) info.name = line.split(":")[1].trim();
      if (line.startsWith("Description"))
        info.description = line.split(":")[1].trim();
      if (line.startsWith("Physical address"))
        info.mac = line.split(":")[1].trim();
      if (line.startsWith("State")) info.state = line.split(":")[1].trim();
      if (line.startsWith("SSID"))
        info.connectedSSID = line.split(":")[1].trim();
      if (line.startsWith("Signal")) info.signal = line.split(":")[1].trim(); // %
    });

    cb(null, info);
  });
};
