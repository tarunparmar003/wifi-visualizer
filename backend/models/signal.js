const mongoose = require("mongoose");

const SignalSchema = new mongoose.Schema({
  ssid: String,
  signal: Number,
  channel: Number,
  time: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Signal", SignalSchema);
