const mongoose = require("mongoose");
const EventSignUpSchema = require("./EventSignUp").schema;

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
  },
  participants: [EventSignUpSchema]
});

mongoose.model("Events", EventsSchema);

module.exports = mongoose.model("Events");
