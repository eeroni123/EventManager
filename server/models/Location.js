const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LocationSchema = new mongoose.Schema({
  city: {
    type: String,
    required: [true, "City required"]
  },
  address: {
    type: String,
    required: [true, "Address required"]
  },
  contactinfo: {
    phone: {
      type: String,
      required: [true, "Phone number required"]
    },
    web: {
      type: String,
      required: [true, "Web address required"]
    }
  },
  created: {
    type: Date,
    required: true,
    default: new Date()
  }
});

mongoose.model("Location", LocationSchema);

module.exports = mongoose.model("Location");
