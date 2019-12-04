const express = require("express");
const router = express.Router();
const locationController = require("../controllers/LocationController");

router.post("/", function(req, res, next) {
  locationController.create(req.body, function(err, result) {
    if (err) {
      console.log(err);
      res.json({
        success: 0,
        error: err
      });
      return;
    }

    res.json({
      success: 1,
      data: result
    });
  });
});

router.get("/all", function(req, res, next) {
  locationController.find(req.query, function(err, results) {
    if (err) {
      console.log(err);
      res.json({
        success: 0,
        error: err
      });
      return;
    }
    res.json({
      success: 1,
      data: results
    });
  });
});

router.get("/:id", function(req, res, next) {
  const id = req.params.id;

  locationController.findById(id, function(err, result) {
    if (err) {
      console.log(err);
      res.status(500).json({
        success: 0,
        data: result
      });
      return;
    }

    res.status(200).json({
      success: 1,
      data: result
    });
  });
});

module.exports = router;
