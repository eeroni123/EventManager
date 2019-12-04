const Location = require("../models/Location");

module.exports = {
  create: function(params, callback) {
    Location.create(params, function(err, result) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  },
  find: function(params, callback) {
    Location.find(params, "_id city address contactinfo", function(
      err,
      results
    ) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  },

  findById: function(id, callback) {
    Location.findById(id, function(err, results) {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
};
