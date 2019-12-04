const mongoose = require("mongoose");
const EventSignUpSchema = require("./EventSignUp").schema;
const LocationSchema = require("./Location").schema;
const Schema = mongoose.Schema;

const EventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name required"]
  },
  location: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: [true, "Location required"]
  },
  description: {
    type: String,
    required: [true, "Description required"]
  },
  start: {
    type: Date,
    required: [true, "Start date required"]
  },
  end: {
    type: String,
    required: [true, "End date required"]
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
