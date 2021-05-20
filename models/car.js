const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  seats: {
    type: Number,
    required: true,
    min: [1, "Too few seats"],
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Car", schema);
