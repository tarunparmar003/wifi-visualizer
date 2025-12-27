const mongoose = require("mongoose");

const SignalSchema = new mongoose.Schema({
  ssid: {
    type: String,
    required: true,
    trim: true,
  },
  signal: {
    type: Number,
    required: true,
  },
  channel: {
    type: Number,
    required: true,
    index: true,
  },
  time: {
    type: Date,
    default: Date.now,
    index: true,
  },
});

module.exports = mongoose.model("Signal", SignalSchema);
