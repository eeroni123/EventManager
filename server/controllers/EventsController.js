const Events = require("../models/Events");

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
  }
};
