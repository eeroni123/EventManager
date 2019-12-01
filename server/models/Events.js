const mongoose = require("mongoose");

const EventsSchema = new mongoose.Schema({
  title: String,
  teaser: String,
  body: String,
  status: {
    type: Number,
    default: 1
  },
  created: {
    type: Date,
    required: true,
    default: new Date()
  }
});

mongoose.model("Events", EventsSchema);

module.exports = mongoose.model("Events");
