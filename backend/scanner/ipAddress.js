const { exec } = require("child_process");

module.exports = function getIP(cb) {
  exec("ipconfig", (err, stdout) => {
    if (err) return cb(err);
    const m = stdout.match(/IPv4 Address[.\s]*:\s*([0-9.]+)/);
    cb(null, m ? m[1] : null);
  });
};
