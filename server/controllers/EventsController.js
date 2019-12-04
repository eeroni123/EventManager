const Events = require("../models/Events");
const EventSignUp = require("../models/EventSignUp");

module.exports = {
  create: function(params, callback) {
    Events.create(params, function(err, result) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  },
  find: function(params, callback) {
    Events.find(params, "_id name location description end start participants")
      .populate("location")
      .exec(function(err, results) {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, results);
      });
  },

  findById: function(id, callback) {
    Events.findById(id)
      .populate("location")
      .exec(function(err, results) {
        if (err) {
          callback(err, null);
          return;
        }
        callback(null, results);
      });
  },

  createSignUp: function(id, username, attendance, callback) {
    Events.findById(id)
      .populate("location")
      .exec(function(err, result) {
        if (err) {
          console.log(err);
          callback(err, null);
          return;
        }

        var eventsignup = new EventSignUp({
          username: username,
          attendance: attendance
        });

        result.participants.push(eventsignup);

        result.save(function(err, eventsignupResult) {
          if (err) {
            callback(err, null);
            return;
          }

          callback(null, eventsignupResult);
        });
      });
  }
};
