const express = require("express");
const router = express.Router();

const {
  get_,
} = require("../controllers/all");

router.route("/").get(get_);

module.exports = router;
