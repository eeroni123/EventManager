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
    Events.find(params, "_id title teaser", function(err, results) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  },

  findById: function(id, callback) {
    Events.findById(id, function(err, results) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  },

  createSignUp: function(id, username, body, callback) {
    Events.findById(id, function(err, result) {
      if (err) {
        callback(err, null);
        return;
      }

      var eventsignup = new EventSignUp({ username: username, body: body });

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
