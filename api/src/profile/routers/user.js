const express = require("express");
const router = express.Router();

const {
  get_,
  idGet_,
  delete_,
  update_,
} = require("../controllers/user");

router.route("/").get(get_);

router.route("/:id").get(idGet_);

router.route("/:id").delete(delete_);

module.exports = router;
