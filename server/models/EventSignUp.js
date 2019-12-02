var mongoose = require("mongoose");

var EventSignUpSchema = new mongoose.Schema({
  username: String,
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

mongoose.model("EventSignUp", EventSignUpSchema);

module.exports = mongoose.model("EventSignUp");
