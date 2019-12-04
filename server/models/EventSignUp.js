var mongoose = require("mongoose");
const { attendanceType } = require("./enums");

const EventSignUpSchema = new mongoose.Schema({
  username: String,
  attendance: String,
  created: {
    type: Date,
    required: true,
    default: new Date()
  }
});

mongoose.model("EventSignUp", EventSignUpSchema);

module.exports = mongoose.model("EventSignUp");
