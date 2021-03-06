const express = require("express");
const routes = require("./routes/index");
const eventsRoute = require("./routes/events");
const locationRoute = require("./routes/location");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var authRoute = require("./routes/auth");
const authCheckMiddleware = require("./middleware/authCheck");

require("dotenv").config();

let app = express();
const PORT = process.env.PORT || 5000;

const dbURL = process.env.MONGO_DB_URL;

mongoose.connect(dbURL, function(err) {
  if (err) {
    console.log("Error connecting to: " + dbURL);
  } else {
    console.log("Connected to: " + dbURL);
  }
});

app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);
app.use("/user", authRoute);
app.use("/events/:id/signup", authCheckMiddleware);
app.use("/events", eventsRoute);
app.use("/location", locationRoute);

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}`);
});
